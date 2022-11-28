import { FC,  useRef } from 'react'
import ReactPlayer from 'react-player'

import { useAuth } from '@/hooks/useAuth'

import AuthPlaceholder from './Placeholder/AuthPlaceholder'
import ProfilePlaceholder from './Placeholder/ProfilePlaceholder'
import styles from './videoplayer.module.scss'
import screenfull from 'screenfull'

interface IVideoPlayer {
	url: string
	play: boolean
	typeContent: number
	slug: string
	poster?: string
	title?: string
	nextSeries: () => void
	fullScreen: boolean
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
																			 }) => {
	const videoRef = useRef(null)
	const { user } = useAuth()
	const onstart=()=> {

		const player = document.querySelector('video') || null
		if (screenfull.isEnabled && player) {
			screenfull.request(player, {navigationUI: 'show'})
		}
	}


	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h5>{title}</h5>
				{user && user.paid >= typeContent && play && (
					<ReactPlayer
						url={url}
						controls
						ref={videoRef}
						playing={play}
						width={'100%'}
						height={'auto'}
						pip
						onEnded={nextSeries}
						// onBuffer={console.log}
						// onBufferEnd={console.log}
						// onClickPreview={console.log}
						// onDisablePIP={console.log}
						// onDuration={console.log}
						// onPause={console.log}
						// onError={console.log}
						// onPlay={console.log}
						onStart={onstart}
						// onEnablePIP={console.log}
						// onProgress={console.log}
						// onReady={()=>console.log('ready')}
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
