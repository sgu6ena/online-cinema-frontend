import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useFavoritesById } from '@/hooks/useFavorites'
import { useMovie } from '@/hooks/useMovie'
import { useVideo } from '@/hooks/useVideo'
import { getMovie } from '@/store/movie/movie.actions'
import { getMoviesBread } from '@/utils/breadcrumb/movie'
import Meta from '@/utils/meta/Meta'
import { getListDot } from '@/utils/movie/getGenresList'
import MovieSkeleton from '../../loaders/MovieSkeleton'
import MaterialIcon from '../../ui/MaterialIcon'
import Breadcrumbs from '../../ui/breadcrumbs/breadcrumbs'
import Collection from '../../ui/collections/Collection'
import Heading from '../../ui/heading/Heading'

import VideoPLayer from '../../ui/videoPlayer/VideoPLayer'
import Vote from '../../ui/vote/Vote'

import styles from './Movie.module.scss'
import MovieDescription from './MovieDescription'
import Tabs from './Tabs'
import screenfull from 'screenfull'

const Movie: FC = () => {
	const { user } = useAuth()
	const {
		movie,
		collection,
		isLoading,
		vote,
		myVote,
		isFavorite: isFavoriteMovie,

	} = useMovie()

	const { url, idFile, serial, title, isPlayed, playlist, seasons, fullScreen } = useVideo()
	const {
		getMovie,
		favorites,
		voting,
		setIdFile,
		setPlay,
		setTitle,
		setFullScreen,
		getUrl,
		resetVideo,
		setPlaylist,
		setSerial,
		toggleFavorites,
		getFavoritesIds,
		// setPercent
	} = useActions()
	const { asPath, query } = useRouter()
	const movieId = query.id && String(query.id)
	const [activeId, setActiveId] = useState(0)
	const [percent, setPercent] = useState(0)
	const isFavorite = useFavoritesById(movieId || '')
	const handleMovie = (id: number, title: string, percent: number = 0) => {
		setIdFile(`${id}`)
		setPlay(true)
		setTitle(getListDot([movie?.title || '', title]))
		setActiveId(id)
		setPercent(percent)
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

	useEffect(() => {
		const active = playlist.find((item) => item?.isActive === true)
		setActiveId(Number(active?.idFile) || 0)
		setPercent(playlist.find((item) => item?.isActive === true)?.chunk || 0)
	}, [playlist])

	const nextSeries = () => {
		setFullScreen(screenfull.isFullscreen)

		const playIndex = playlist.findIndex((item) => idFile === item.idFile)
		const nextIndex = playlist.length > playIndex + 1 ? playIndex + 1 : 0
		const nextIdFile = playlist[nextIndex].idFile
		const nextTitle = getListDot([
			playlist[+nextIndex].seasonTitle,
			playlist[+nextIndex].titleFile,
		])

		return nextIndex === 0 ? resetVideo() : handleMovie(+nextIdFile, nextTitle, 0)
	}


	const favoriteHandler = () => {
		if (movieId) {
			favorites(movieId)
			toggleFavorites()
		}
	}
	useEffect(() => {
		if (user) {
			getFavoritesIds()
		}
	}, [])

	// const isContinueWatching = serial && !isPlayed && movie?.media[0].items[0].file != activeId
	const isContinueWatching = serial && !isPlayed && !!user && (movie?.media[0].items[0].file != activeId || movie?.media[0].items[0].chunk> 0) || !serial && !isPlayed && movie?.media[0]?.items[0]?.chunk && (movie?.media[0]?.items[0]?.chunk > 0) && !!user
	const isStartWatching = !isPlayed && !isContinueWatching
	console.log({isContinueWatching, isStartWatching, user})
	return (
		<Meta
			title={movie?.title || 'PORTAL'}
			description='Фильмы на любой вкус, мультфильмы, популярные сериалы, новинки от ведущих мировых киностудий'
			image={'https://idc.md/storage/app/media/images/banners/portal/main.png'}
		>
			{isLoading && <MovieSkeleton />}
			{movie && (
				<>
					<div className={styles.movie}>
						<Breadcrumbs breadcrumbs={getMoviesBread(movie)} />
						<Heading title={movie.title} className={styles.mobile} />
						<div className={styles.main}>
							<div className={styles.videoBox}>
								<VideoPLayer
									fullScreen={fullScreen}
									url={url || ''}
									play={isPlayed}
									typeContent={movie.type_content}
									slug={movie.id}
									poster={movie.logo}
									title={title}
									nextSeries={nextSeries}
									percent={percent}
								/>

								<div className={styles.actions}>
									<div className={styles.buttons}>
										{movie.trailer && <button><MaterialIcon name={'MdOutlineHomeMax'} /> Трейлер</button>}
										<button onClick={favoriteHandler} className={cn(isFavorite && styles.active)}>
											<MaterialIcon name={isFavoriteMovie ? 'MdBookmark' : 'MdBookmarkBorder'} />
											<span>Избранное</span>
										</button>
										{isStartWatching && (
											<button className={styles.play} onClick={() => handleMovie(seasons[0].items[0].file, '', 0)}>
												<MaterialIcon name={!isPlayed ? 'MdPlayArrow' : 'MdPause'} />
												<span>Смотреть</span>
											</button>
										)}
										{/*<Report />*/}
										{isContinueWatching ? (
											<button className={styles.play} onClick={() => handleMovie(activeId, '', percent)}>
												<MaterialIcon name={!isPlayed ? 'MdPlayArrow' : 'MdPause'} />
												<span>Продолжить</span>
											</button>
										):<></>}
									</div>

									{movieId && (
										<Vote vote={vote} my_vote={myVote} onClick={(i) => voting(i)} movieId={movieId} />
									)}
								</div>
							</div>
							<MovieDescription movie={movie} />
						</div>
						{seasons.length > 0 && seasons[0]?.items.length > 1 && (
							<div className={styles.movieContainer}>
								<Tabs media={seasons} fn={handleMovie} logo={movie.logo} activeId={activeId} />
							</div>
						)}
					</div>
					<Collection collection={collection} />
				</>
			)}
		</Meta>
	)
}

export default Movie
