import cn from 'classnames'
import {useRouter} from 'next/router'
import {FC, useEffect} from 'react'

import {useActions} from '../../../hooks/useActions'
import {useMovie} from '../../../hooks/useMovie'
import {useVideo} from '../../../hooks/useVideo'
import {getMovie} from '../../../store/movie/movie.actions'

import MovieSkeleton from '../../loaders/MovieSkeleton'
import {collectionsToItems} from '../../screens/home/Home'
import MaterialIcon from '../../ui/MaterialIcon'
import Gallery from '../../ui/gallery/Gallery'
import VideoPLayer from '../../ui/videoPlayer/VideoPLayer'
import Vote from '../../ui/vote/Vote'

import styles from './Movie.module.scss'
import MovieDescription from './MovieDescription'
import Tabs from './Tabs'
import {getListDot} from "../../../utils/movie/getGenresList";
import GallerySlider from '../../ui/gallery/GalerySlider'


const Movie: FC = () => {
  const {
    movie,
    collection,
    isLoading,
    isFavorite,
    isFavoriteLoading,
    vote,
    myVote,
  } = useMovie()

  const {url, idFile, serial, title, isPlayed, urlLoading, playlist, seasons} = useVideo()

  const {
    getMovie,
    favorites,
    voting,
    setIdFile,
    setPlay,
    setTitle,
    getUrl,
    resetVideo,
    setPlaylist,
    setSerial
  } = useActions()
  const {asPath, query} = useRouter()
  const movieId = query.id && String(query.id)

  const handleMovie = (id: number, title: string) => {
    setIdFile(`${id}`)
    setPlay(true)
    setTitle(getListDot([movie?.title || '', title]))
  }

  useEffect(() => {
    movieId && getMovie(movieId)
  }, [movieId])

  useEffect(() => {
    resetVideo()
  }, [movie, asPath])

  useEffect(() => {
    setPlaylist(movie?.media || [])
    setSerial(movie?.serial || false)
  }, [movie])

  useEffect(() => {
    if (idFile !== '') {
      getUrl(idFile)
    }
  }, [idFile])

  const nextSeries = () => {
    const playIndex = playlist.findIndex((item) => idFile === item.idFile)
    const nextIndex = playlist.length > playIndex + 1 ? playIndex + 1 : 0
    const nextIdFile = playlist[nextIndex].idFile
    const nextTitle = getListDot([playlist[+nextIndex].seasonTitle, playlist[+nextIndex].titleFile])
    return nextIndex === 0 ? resetVideo() : handleMovie(+nextIdFile, nextTitle)
  }
  return (
    <div className={styles.movie}>
      {isLoading && <MovieSkeleton/>}
      {movie && (
        <>
          <div className={styles.main}>
            <div className={styles.videoBox}>
              <VideoPLayer
                url={url || ''}
                play={isPlayed}
                typeContent={movie.type_content}
                slug={movie.id}
                poster={movie.logo}
                title={title}
                nextSeries={nextSeries}
              />

              <div className={styles.actions}>
                <div className={styles.buttons}>
                  {movie.trailer && (
                    <button>
                      <MaterialIcon name={'MdOutlineHomeMax'}/> Трейлер
                    </button>
                  )}
                  <button
                    onClick={() => movieId && favorites(movieId)}
                    className={cn(isFavorite && styles.active)}
                  >
                    <MaterialIcon
                      name={
                        isFavoriteLoading
                          ? 'MdBookmarkBorder'
                          : isFavorite
                            ? 'MdBookmark'
                            : 'MdBookmarkBorder'
                      }
                    />
                    Избранное
                  </button>
                  {!serial && !isPlayed && (
                    <button
                      className={styles.play}
                      onClick={() =>
                        handleMovie(seasons[0].items[0].file, '')
                      }
                    >
                      <MaterialIcon name={!isPlayed ? 'MdPlayArrow' : 'MdPause'}/>
                      Смотреть
                    </button>
                  )}
                </div>

                {movieId && (
                  <Vote
                    vote={vote}
                    my_vote={myVote}
                    onClick={(i) => voting(i)}
                    movieId={movieId}
                  />
                )}
              </div>
            </div>
            <MovieDescription movie={movie}/>
          </div>

          {seasons.length > 0 && seasons[0]?.items.length > 1 && (
            <div className={styles.movieContainer}>
              <Tabs media={seasons} fn={handleMovie} logo={movie.logo}/>
            </div>
          )}
          <h3 className={'text-white text-2xl mb-3 mt-6'}>Рекомендуем</h3>
          <GallerySlider items={collectionsToItems(collection)}/>
        </>
      )}
    </div>
  )
}

export default Movie
