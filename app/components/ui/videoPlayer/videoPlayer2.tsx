import React, { ChangeEventHandler, Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import screenfull from 'screenfull'
import { useAuth } from '@/hooks/useAuth'
import styles from './videoplayer2.module.scss'
import Volume from '@/ui/videoPlayer/volume/volume'
import SeekBar from '@/ui/videoPlayer/SeekBar/SeekBar'
import TimeDisplay from '@/ui/videoPlayer/TimeDisplay/TimeDisplay'
import FullScreenButton from '@/ui/videoPlayer/FullScreenButton/FullScreenButton'
import PlayPauseButton from '@/ui/videoPlayer/playPause/playPauseButton'
import ProfilePlaceholder from '@/ui/videoPlayer/Placeholder/ProfilePlaceholder'
import AuthPlaceholder from '@/ui/videoPlayer/Placeholder/AuthPlaceholder'
import cn from 'classnames'
import { useActions } from '@/hooks/useActions'
import PlayerControls from '@/ui/videoPlayer/PlayerControls'

interface IVideoPlayer2 {
	url: string;
	play: boolean;
	typeContent: number;
	slug: string;
	poster?: string;
	title?: string;
	nextSeries: () => void;
	fullScreen: boolean;
	idFile: string;
	percent: number;

	// isFull:boolean;
	// setIsFull:Dispatch<SetStateAction<boolean>>
}

const VideoPlayer2: FC<IVideoPlayer2> = ({
																					 nextSeries,
																					 url,
																					 play,
																					 typeContent,
																					 slug,
																					 poster = '',
																					 title = '',
																					 fullScreen,
																					 idFile,
																					 percent = 0,
																					 // isFull,setIsFull
																				 }) => {
	const videoRef = useRef<ReactPlayer>(null)
	const [selectedAudioTrack, setSelectedAudioTrack] = useState<number>(0)
	const { user } = useAuth()
	const [isAudioChange, setIsAudioChange] = useState(false)
	const [volume, setVolume] = useState<number>(100)
	const [playing, setPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [progressTime, setProgressTime] = useState(0)
	const [duration, setDuration] = useState(0)


	const togglePlaying = () => {
		setPlaying(!playing)
	}

	const onStart = () => {
		setPlaying(true)
		const player = document.querySelector('video') || null
		const hls = videoRef.current?.getInternalPlayer('hls')
		setIsAudioChange(videoRef.current?.getInternalPlayer('hls')?.audioTracks.length > 1)

		if (screenfull.isEnabled && !!player && fullScreen) {
			screenfull.request(player, { navigationUI: 'show' })
		}
	}

	const changeAudio: ChangeEventHandler<HTMLSelectElement> = (e) => {
		const selectedTrack = parseInt(e.target.value, 10)
		setIsAudioChange(videoRef.current?.getInternalPlayer('hls')?.audioTracks.length > 1)
		setSelectedAudioTrack(selectedTrack)
		const hls = videoRef.current?.getInternalPlayer('hls')
		if (hls) {
			hls.audioTrack = selectedTrack
		}
	}
	// const [isMouseMoving, setIsMouseMoving] = useState(false);

	const [isMouseMoving, setIsMouseMoving] = useState(false)

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>

		const handleMouseMove = () => {
			setIsMouseMoving(true)
			clearTimeout(timer)
			timer = setTimeout(() => {
				setIsMouseMoving(false)
			}, 5000) // время в миллисекундах после остановки мыши
		}
		//@ts-ignore
		if (videoRef.current && videoRef.current.wrapper) {	//@ts-ignore
			videoRef.current.wrapper.addEventListener('mousemove', handleMouseMove)
		}

		return () => {//@ts-ignore
			if (videoRef.current && videoRef.current.wrapper) {	//@ts-ignore
				videoRef.current.wrapper.removeEventListener('mousemove', handleMouseMove)
			}
			clearTimeout(timer)
		}
	}, []);

	// const handleMouseLeave = () => {
	// 	setIsMouseMoving(false);
	// };
	const isVisible = fullScreen ? isMouseMoving : true
	return (
		<div
			className={cn(styles.container, fullScreen ? styles.fullscreen : styles.window)}>
			<div className={cn(styles.wrapper)}>
				{!fullScreen && <h5>{title}</h5>}
				{user && user.paid >= typeContent && (
					<>
						<div className={'w-full relative'} style={{ cursor: isVisible ? 'default' : 'none' }}
						>
							<div onClick={togglePlaying}>
								<ReactPlayer
									url={url}
									volume={volume / 100}
									ref={videoRef}
									playing={playing}
									width={'100%'}
									height={'auto'}
									pip
									config={{
										file: {
											forceHLS: true,
											hlsOptions: {
												capLevelToPlayerSize: true,
												maxBufferSize: 30 * 1000 * 1000,
												maxBufferLength: 10,
												highBufferWatchdogPeriod: 10,
												enableCEA708Captions: true,
												enableWebVTT: true,
												volume: volume / 100,
											},
										},
									}}
									onProgress={(progress) => {
										setCurrentTime(progress.playedSeconds)
										// setProgressTime(progress.loadedSeconds)
									}}
									fullscreen={fullScreen}
									onReady={() => setPlaying(true)}
									onEnded={nextSeries}
									onDuration={setDuration}
									onStart={onStart}
									controls={false}
									progressInterval={1000}

								/>
							</div>

							{url && <PlayerControls
								isVisible={isVisible}
								playing={playing}
								togglePlaying={togglePlaying}
								currentTime={currentTime}
								duration={duration}
								isAudioChange={isAudioChange}
								selectedAudioTrack={selectedAudioTrack}
								changeAudio={changeAudio}
								volume={volume}
								setVolume={setVolume}
								videoRef={videoRef}
								progressTime={progressTime}
								setProgressTime={setProgressTime}
								setCurrentTime={setCurrentTime}
							/>}
						</div>

					</>
				)}
				{user && user.paid < typeContent && play && <ProfilePlaceholder />}
				{!user && play && <AuthPlaceholder slug={slug} />}
				{poster && !play && !url && (
					<div className={styles.imageBox}>
						<img src={poster} alt={title} />
						<img src={poster} alt={title} className={styles.poster} />
					</div>
				)}
			</div>
		</div>
	)
}

export default VideoPlayer2
