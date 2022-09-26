import cn from 'classnames'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { useActions } from '../../../hooks/useActions'
import { useMovie } from '../../../hooks/useMovie'
import { useVideo } from '../../../hooks/useVideo'
import { getMovie } from '../../../store/movie/movie.actions'
import { getListDot } from '../../../utils/movie/getGenresList'
import MovieSkeleton from '../../loaders/MovieSkeleton'
import MaterialIcon from '../../ui/MaterialIcon'
import Collection from '../../ui/collections/Collection'
import VideoPLayer from '../../ui/videoPlayer/VideoPLayer'
import Vote from '../../ui/vote/Vote'

import styles from './Movie.module.scss'
import MovieDescription from './MovieDescription'
import Tabs from './Tabs'
import Heading from '../../ui/heading/Heading'
import Meta from '../../../utils/meta/Meta'

const Movie: FC = () => {
	const { movie, collection, isLoading, isFavorite, isFavoriteLoading, vote, myVote } = useMovie()
	const { url, idFile, serial, title, isPlayed, playlist, seasons } = useVideo()
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
		setSerial,
	} = useActions()
	const { asPath, query } = useRouter()
	const movieId = query.id && String(query.id)
	const [activeId, setActiveId] = useState(0)

	const handleMovie = (id: number, title: string) => {
		setIdFile(`${id}`)
		setPlay(true)
		setTitle(getListDot([movie?.title || '', title]))
		setActiveId(id)
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
		const active = playlist.find(item => item?.isActive === true)
		setActiveId(Number(active?.idFile) || 0)
	}, [playlist])

	const nextSeries = () => {
		const playIndex = playlist.findIndex((item) => idFile === item.idFile)
		const nextIndex = playlist.length > playIndex + 1 ? playIndex + 1 : 0
		const nextIdFile = playlist[nextIndex].idFile
		const nextTitle = getListDot([
			playlist[+nextIndex].seasonTitle,
			playlist[+nextIndex].titleFile,
		])
		return nextIndex === 0 ? resetVideo() : handleMovie(+nextIdFile, nextTitle)
	}

	return (
		<>
			{isLoading && <MovieSkeleton />}
			{movie && (
				<Meta title={movie.title} image={movie.logo}>
					<div className={styles.movie}>
						<Heading title={movie.title} className={styles.mobile} />
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
												<MaterialIcon name={'MdOutlineHomeMax'} /> Трейлер
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
											<span>Избранное</span>
										</button>
										{!isPlayed && (
											<button
												className={styles.play}
												onClick={() =>
													handleMovie(seasons[0].items[0].file, '')
												}
											>
												<MaterialIcon
													name={!isPlayed ? 'MdPlayArrow' : 'MdPause'}
												/>
												<span>Смотреть</span>
											</button>
										)}

										{/*{serial && !isPlayed && (*/}
										{/*	<button*/}
										{/*		className={styles.play}*/}
										{/*		onClick={() =>*/}
										{/*			handleMovie(activeId, '')*/}
										{/*		}*/}
										{/*	>*/}
										{/*		<MaterialIcon*/}
										{/*			name={!isPlayed ? 'MdPlayArrow' : 'MdPause'}*/}
										{/*		/>*/}
										{/*		Продолжить*/}
										{/*	</button>*/}
										{/*)}*/}
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
							<MovieDescription movie={movie} />
						</div>
						{seasons.length > 0 && seasons[0]?.items.length > 1 && (
							<div className={styles.movieContainer}>
								<Tabs media={seasons} fn={handleMovie} logo={movie.logo} activeId={activeId} />
							</div>
						)}
					</div>
					<Collection collection={collection} />
				</Meta>
			)}
		</>
	)
}

export default Movie