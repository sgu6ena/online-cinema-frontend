import cn from 'classnames'
import {FC, useRef} from 'react'
import {useAuth} from '../../../hooks/useAuth'

import AuthPlaceholder from './Placeholder/AuthPlaceholder'

import styles from './videoplayer.module.scss'
import ReactPlayer from "react-player";
import ProfilePlaceholder from "./Placeholder/ProfilePlaceholder";

const VideoPLayer: FC<{ url: string; play: boolean; typeContent: number; slug: string }> = ({
                                                                                                url,
                                                                                                play,
                                                                                                typeContent,
                                                                                                slug
                                                                                            }) => {

    const videoRef = useRef(null)
    const {user} = useAuth()

    return (<div className={styles.container}>
            <div
                className={styles.wrapper}
            >
                {user && user.subscription >= typeContent &&
                    <ReactPlayer url={url} controls ref={videoRef} playing={play} width={600}/>}
                {user && user.subscription < typeContent && <ProfilePlaceholder/>}
                {!user && <AuthPlaceholder slug={slug}/>}

            </div>
        </div>
    )
}

export default VideoPLayer
