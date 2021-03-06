import {FC, useRef} from 'react'
import ReactPlayer from 'react-player'

import {useAuth} from '../../../hooks/useAuth'

import AuthPlaceholder from './Placeholder/AuthPlaceholder'
import ProfilePlaceholder from './Placeholder/ProfilePlaceholder'
import styles from './videoplayer.module.scss'
import Image from "next/image";

interface IVideoPlayer {
  url: string
  play: boolean
  typeContent: number
  slug: string,
  poster?: string
  title?: string
  nextSeries: () => void

}

const VideoPLayer: FC<IVideoPlayer> = ({nextSeries, url, play, typeContent, slug, poster = '', title = ''}) => {
  const videoRef = useRef(null)
  const {user} = useAuth()

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
            width={600}
            pip
            onEnded={nextSeries}
          />
        )}
        {user && user.paid < typeContent && play && <ProfilePlaceholder/>}
        {!user && play && <AuthPlaceholder slug={slug}/>}


        {poster && !play &&
            <div className={styles.imageBox}>
                <Image
                    src={poster}
                    alt={title}
                    layout='fill'
                    priority
                    unoptimized
                />
                <Image
                    src={poster}
                    alt={title}
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
