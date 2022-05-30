import {FC, useRef} from 'react'
import ReactPlayer from 'react-player'

import {useAuth} from '../../../hooks/useAuth'

import AuthPlaceholder from './Placeholder/AuthPlaceholder'
import ProfilePlaceholder from './Placeholder/ProfilePlaceholder'
import styles from './videoplayer.module.scss'

const VideoPLayer: FC<{
	url: string
	play: boolean
	typeContent: number
	slug: string
}> = ({url, play, typeContent, slug}) => {
	const videoRef = useRef(null)
	const {user} = useAuth()

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				{user && user.paid >= typeContent && (
					<ReactPlayer
						url={url}
						controls
						ref={videoRef}
						playing={play}
						width={600}
						pip

					/>
				)}
				{user && user.paid < typeContent && <ProfilePlaceholder/>}
				{!user && <AuthPlaceholder slug={slug}/>}
			</div>
		</div>
	)
}

export default VideoPLayer
