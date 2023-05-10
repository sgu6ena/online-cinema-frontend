import { FC, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import { useAuth } from '@/hooks/useAuth'

import AuthPlaceholder from './Placeholder/AuthPlaceholder'
import ProfilePlaceholder from './Placeholder/ProfilePlaceholder'
import styles from './videoplayer.module.scss'
import screenfull from 'screenfull'
import { GetShooting } from '@/screens/movie/useShooting'
import axios from 'axios'
import { PortalService } from '../../../api/portal.service'
import { useActions } from '@/hooks/useActions'
import BaseReactPlayer from 'react-player/base'


const SHOOTING_TIME = 30

interface IVideoPlayer {
	url: string
	play: boolean
	typeContent: number
	slug: string
	poster?: string
	title?: string
	nextSeries: () => void
	fullScreen: boolean
	idFile: string
	percent: number

}

const VideoPLayer: FC<IVideoPlayer> = ({
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
	const { user } = useAuth()
	const [progress, setProgress] = useState(0)
	const { setPercentChunk } = useActions()
	const onstart = () => {
		const player = document.querySelector('video') || null
		if (screenfull.isEnabled && !!player && screenfull && fullScreen) {
			screenfull.request(player, { navigationUI: 'show' })
		}
	}

	const duration = (time: number) => {
		const timeStamp = (time * percent) / 100
		if (videoRef.current)
			videoRef.current.seekTo(timeStamp)
	}
	const onprogress = async () => {
		if (videoRef.current) {
			const currentTime = videoRef.current.getCurrentTime() || 0
			const duration = videoRef.current.getDuration()
			if (currentTime - progress > SHOOTING_TIME) {
				const percent = currentTime / (duration / 100)
				const response = await PortalService.sendShootingPercent(idFile, percent)
				setPercentChunk({ id: idFile, percent: percent })
				setProgress(currentTime)
			}
		}

	}

	useEffect(() => {
		setProgress(0)
	}, [idFile])

	return (
		<div className={styles.container}>
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
						config={{ file:{
								forceHLS:true,
								hlsOptions:{
									maxBufferSize: 30 * 1000 * 1000,
									maxBufferLength: 10,
									highBufferWatchdogPeriod:10
								}
							} }}
						onEnded={nextSeries}
						// onBuffer={console.log}
						// onBufferEnd={console.log}
						// onClickPreview={console.log}
						// onDisablePIP={console.log}
						onDuration={duration}
						// onPause={console.log}
						// onError={console.log}
						// onPlay={() =>/*@ts-ignore*/
						// 	console.log(videoRef.current.player.props.volume)}
						onStart={onstart}
						// onEnablePIP={console.log}
						onProgress={onprogress}
						// onReady={() => console.log('ready')}
						// onSeek={console.log}
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
	)
}

export default VideoPLayer
