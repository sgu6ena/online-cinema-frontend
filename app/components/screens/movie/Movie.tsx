import Image from 'next/image'
import {useRouter} from 'next/router'
import {FC, useEffect, useState} from 'react'

import {PortalMovieService} from '../../../api/portalMovie.service'
import MovieSkeleton from '../../loaders/MovieSkeleton'
import MaterialIcon from '../../ui/MaterialIcon'
import VideoPLayer from '../../ui/videoPlayer/VideoPLayer'
import Vote from '../../ui/vote/Vote'

import styles from './Movie.module.scss'
import MovieDescription from './MovieDescription'
import Tabs from './Tabs'
import {usePortalMovie} from './usePortalMovie'
import Gallery from "../../ui/gallery/Gallery";
import {collectionsToItems} from "../../screens/home/Home";

const Movie: FC = () => {
    const {asPath} = useRouter()
    const {isLoading, movie, collection} = usePortalMovie()
    const [idFile, setIdFile] = useState('')
    const [url, setUrl] = useState('')
    const [play, setPlay] = useState(false)

    const handleMovie = (id: number) => {
        setIdFile(id.toString())
        setPlay(true)
    }

    useEffect(() => {
        setUrl('')
        setPlay(false)
        setIdFile('')
    }, [movie, asPath])

    useEffect(() => {
        if (idFile !== '') {
            PortalMovieService.getUrl(idFile).then((data) => {
                setUrl(data.data.url)
            })
        }
    }, [idFile, url])

    return (
        <div className={styles.movie}>
            {isLoading && <MovieSkeleton/>}
            {movie && (
                <>
                    <div className={styles.main}>
                        <div className={styles.videoBox}>

                            <VideoPLayer
                                url={url}
                                play={play}
                                typeContent={movie.type_content}
                                slug={movie.id}
                                poster={movie.logo}
                            />
                            <div className={styles.actions}>
                                <div className={styles.buttons}>
                                    <button>
                                        <MaterialIcon name={'MdOutlineHomeMax'}/> Трейлер
                                    </button>
                                    <button>
                                        <MaterialIcon name={'MdBookmarkBorder'}/>
                                        Избранное
                                    </button>
                                    {movie.media.length === 1 && movie.media[0]?.items.length === 1 &&
                                        <button className={styles.play}
                                                onClick={() => handleMovie(movie.media[0].items[0].file)}>
                                            <MaterialIcon name={'MdPlayArrow'}/>
                                            Смотреть
                                        </button>}
                                </div>

                                <Vote vote={movie.vote} my_vote={3} onClick={() => 5}/>
                            </div>
                        </div>
                        <MovieDescription movie={movie}/>
                    </div>

                    {movie.media.length > 0 && movie.media[0]?.items.length > 1 &&
                        <div className={styles.movieContainer}>
                            <Tabs media={movie.media} fn={handleMovie} logo={movie.logo}/>
                        </div>}
                    <h3 className={'text-white text-2xl mb-3 mt-6'}>Рекомендуем</h3>
                    <Gallery items={collectionsToItems(collection)}/>
                </>
            )}
        </div>
    )
}

export default Movie
