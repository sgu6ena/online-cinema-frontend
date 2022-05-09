import cn from 'classnames'
import {FC} from 'react'

import MaterialIcon from '../MaterialIcon'

import {useAuth} from '../../../hooks/useAuth'

import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import styles from './videoplayer.module.scss'
import {useVideo} from './useVideo'
import {IVideoPlayer} from './video.interface'

const VideoPLayer: FC<IVideoPlayer> = ({slug, videoSource}) => {
    const {video, videoRef, actions} = useVideo()

    const {user} = useAuth()
    return (
        <div
            className={cn(styles.wrapper, {
                'h-96': !user,
            })}
        >
            {user ? (
                <>
                    <video
                        ref={videoRef}
                        className={styles.video}
                        src={videoSource}
                        preload="metadata"
                    />
                    <div className={styles.progressBarContainer}>
                        <div
                            style={{width: `${video.progress}%`}}
                            className={styles.progressBar}
                        ></div>
                    </div>

                    <div className={styles.controls}>
                        <div>
                            <button onClick={actions.revert}>
                                <MaterialIcon name="MdHistory"/>
                            </button>
                            <button onClick={actions.toggleVideo}>
                                <MaterialIcon
                                    name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
                                />
                            </button>
                            <button onClick={actions.revert}>
                                <MaterialIcon name="MdUpdate"/>
                            </button>
                            <div className={styles.timeControls}>
                                <p className={styles.controlsTime}>
                                    {Math.floor(video.currentTime / 60) +
                                        ':' +
                                        ('0' + Math.floor(video.currentTime % 60)).slice(-2)}
                                </p>
                                <p> / </p>
                                <p className={styles.controlsTime}>
                                    {Math.floor(video.videoTime / 60) +
                                        ':' +
                                        ('0' + Math.floor(video.videoTime % 60)).slice(-2)}
                                </p>
                            </div>
                        </div>
                        <div>
                            <button onClick={actions.fullScreen}>
                                <MaterialIcon name="MdFullscreen"/>
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <AuthPlaceholder slug={slug}/>
            )}
        </div>
    )
}

export default VideoPLayer
