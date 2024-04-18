import React, { ChangeEventHandler, FC, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import screenfull from 'screenfull'
import { useAuth } from '@/hooks/useAuth'
import styles from './videoplayer.module.scss'
import Volume from '@/ui/videoPlayer/volume/volume'
import SeekBar from '@/ui/videoPlayer/SeekBar/SeekBar'
import TimeDisplay from '@/ui/videoPlayer/TimeDisplay/TimeDisplay'
import FullScreenButton from '@/ui/videoPlayer/FullScreenButton/FullScreenButton'
import PlayPauseButton from '@/ui/videoPlayer/playPause/playPauseButton'
import ProfilePlaceholder from '@/ui/videoPlayer/Placeholder/ProfilePlaceholder'
import AuthPlaceholder from '@/ui/videoPlayer/Placeholder/AuthPlaceholder'

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
																				 }) => {
	const videoRef = useRef<ReactPlayer>(null)
	const [selectedAudioTrack, setSelectedAudioTrack] = useState<number>(0)
	const { user } = useAuth()
	const [isAudioChange, setIsAudioChange] = useState(false)
	const [volume, setVolume] = useState<number>(10)
	const [playing, setPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [progressTime, setProgressTime] = useState(0)
	const [duration, setDuration] = useState(0)

	const togglePlaying = () => {
		setPlaying(!playing)
	}

	const toggleFullScreen = () => {
		if (screenfull.isEnabled) {
			screenfull.toggle()
		}
	}

	const onstart = () => {
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

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h5>{title}</h5>
				{user && user.paid >= typeContent && (
					<>

						<div onClick={togglePlaying}>
							<ReactPlayer
								url={url}
								volume={volume / 10}
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
											volume: volume / 10,
										},
									},
								}}
								onProgress={(progress) => {
									// console.log(progress)
									setCurrentTime(progress.playedSeconds)
									// setProgressTime(progress.loadedSeconds)
								}}
								// onBuffer={() => console.log('Video is buffering')}
								// onClickPreview={() => console.log('Preview clicked')}
								onReady={() => setPlaying(true)}
								onEnded={nextSeries}

								onDuration={setDuration}
								onStart={onstart}
								controls={false}
								progressInterval={1000}
							/>
						</div>
						{url && <div className={'px-2.5  absolute bottom-0 left-0 right-0'}>
							<div className='flex w-full items-center justify-between'>


								<div className={'flex gap-2 justify-start'}>
									<PlayPauseButton playing={playing} togglePlaying={togglePlaying} />
									<TimeDisplay currentTime={currentTime} duration={duration} />{isAudioChange && (
									<select
										className={' bg-gray-900 leading-none  z-40'}
										value={selectedAudioTrack}
										onChange={changeAudio}
									>
										{videoRef.current?.getInternalPlayer('hls')?.audioTracks.map((track: any, index: number) => (
											<option key={track.id} className={'m-0'} value={index} defaultChecked={track.default}>
												{track.name}
											</option>
										))}
									</select>
								)}
								</div>
							<div className={'flex gap-2 justify-end'}>
								<Volume videoRef={videoRef} setVolume={setVolume} volume={volume} />
								<FullScreenButton toggleFullScreen={toggleFullScreen} />
							</div></div>
							<SeekBar currentTime={currentTime} progressTime={progressTime} setProgressTime={setProgressTime}
											 duration={duration} onSeek={setCurrentTime} videoRef={videoRef} />
						</div>}
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
