import { ChangeEventHandler, EventHandler, FC, SelectHTMLAttributes, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import screenfull from 'screenfull'

import { useAuth } from '@/hooks/useAuth'
import AuthPlaceholder from './Placeholder/AuthPlaceholder'
import ProfilePlaceholder from './Placeholder/ProfilePlaceholder'
import styles from './videoplayer.module.scss'

const SHOOTING_TIME = 30

interface IVideoPlayer {
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

const VideoPlayer: FC<IVideoPlayer> = ({
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
	const [selectedAudioTrack, setSelectedAudioTrack] = useState<number>(0) // Индекс выбранной аудиодорожки

	const { user } = useAuth()
	const [progress, setProgress] = useState(0)

	const onstart = () => {
		const player = document.querySelector('video') || null
		if (screenfull.isEnabled && !!player && screenfull && fullScreen) {
			screenfull.request(player, { navigationUI: 'show' })
		}
	};

	const duration = (time: number) => {
		const timeStamp = (time * percent) / 100
		if (videoRef.current) videoRef.current.seekTo(timeStamp)
	};

	const onprogress = async () => {
		if (videoRef.current) {
			const currentTime = videoRef.current.getCurrentTime() || 0
			const duration = videoRef.current.getDuration()
			if (currentTime - progress > SHOOTING_TIME) {
				const percent = (currentTime / duration) * 100
				setProgress(currentTime)
			}
		}
	};

	const changeAudio: ChangeEventHandler<HTMLSelectElement> = (e) => {
		const selectedTrack = parseInt(e.target.value, 10)
		setSelectedAudioTrack(selectedTrack)
		const hls = videoRef.current?.getInternalPlayer('hls')
		if (hls) {
			hls.audioTrack = selectedTrack
		}
	}

	useEffect(() => {
		setProgress(0)
	//	setSelectedAudioTrack(0)
	}, [idFile]);

	return (
		<div className={styles.container}>
			<select className={'absolute z-40'}
				value={selectedAudioTrack}
				onChange={changeAudio}
			>
				{videoRef.current?.getInternalPlayer('hls')?.audioTracks.map((track: any, index: number) => (
					<option key={track.id} value={index}>
						{track.name}
					</option>
				))}
			</select>

			<div className={styles.wrapper}>
				<h5>{title}</h5>
				{user && user.paid >= typeContent && (
					<ReactPlayer
						url={url}
						controls
						ref={videoRef}
						playing={play}
						width={'100%'}
						height={'auto'}
						pip
						config={{
							file: {
								forceHLS: true,
								hlsOptions: {
									maxBufferSize: 30 * 1000 * 1000,
									maxBufferLength: 10,
									highBufferWatchdogPeriod: 10,
								},
							},
						}}
						onEnded={nextSeries}
						onDuration={duration}
						onStart={onstart}
						onProgress={onprogress}
					/>
				)}
				{user && user.paid < typeContent && play && <ProfilePlaceholder />}
				{!user && play && <AuthPlaceholder slug={slug} />}

				{poster && !play && (
					<div className={styles.imageBox}>
						<img src={poster} alt={title} />
						<img src={poster} alt={title} className={styles.poster} />
					</div>
				)}
			</div>
		</div>
	);
};

export default VideoPlayer
