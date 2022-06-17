import {FC, useRef} from 'react'
import ReactPlayer from 'react-player'

import {useAuth} from '../../../hooks/useAuth'

import AuthPlaceholder from './Placeholder/AuthPlaceholder'
import ProfilePlaceholder from './Placeholder/ProfilePlaceholder'
import styles from './videoplayer.module.scss'
import Image from "next/image";

const VideoPLayer: FC<{
    url: string
    play: boolean
    typeContent: number
    slug: string,
    poster?: string
}> = ({url, play, typeContent, slug, poster = ''}) => {
    const videoRef = useRef(null)
    const {user} = useAuth()

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {user && user.paid >= typeContent && play && (
                    <ReactPlayer
                        url={url}
                        controls
                        ref={videoRef}
                        playing={play}
                        width={600}
                        pip
                    />
                )}
                {user && user.paid < typeContent && play && <ProfilePlaceholder/>}
                {!user && play && <AuthPlaceholder slug={slug}/>}


                {poster && !play &&
                    <div className={styles.imageBox}>
                        <Image
                            src={poster}
                            alt={''}
                            layout='fill'
                            priority
                            unoptimized
                        />
                        <Image
                            src={poster}
                            alt={''}
                            layout='fill'
                            priority
                            unoptimized
                            className={styles.poster}
                        /></div>}
            </div>
        </div>
    )
}

export default VideoPLayer
