import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { PortalMovieService } from '../../../api/portalMovie.service'
import { useActions } from '../../../hooks/useActions'
import { getMovie } from '../../../store/movie/movie.actions'
import { useMovie } from '../../../store/movie/useMovie'
import MovieSkeleton from '../../loaders/MovieSkeleton'
import { collectionsToItems } from '../../screens/home/Home'
import MaterialIcon from '../../ui/MaterialIcon'
import Gallery from '../../ui/gallery/Gallery'
import VideoPLayer from '../../ui/videoPlayer/VideoPLayer'
import Vote from '../../ui/vote/Vote'

import styles from './Movie.module.scss'
import MovieDescription from './MovieDescription'
import Tabs from './Tabs'

const Movie: FC = () => {
	const { asPath } = useRouter()

	const { query } = useRouter()
	const movieId = query.id && String(query.id)

	useEffect(() => {
		movieId && getMovie(movieId)
	}, [movieId])

	const {
		movie,
		collection,
		isLoading,
		isFavorite,
		isFavoriteLoading,
		vote,
		myVote,
		isVoteLoading,
	} = useMovie()
	const [idFile, setIdFile] = useState('')
	const [url, setUrl] = useState('')
	const [play, setPlay] = useState(false)
	const { getMovie, favorites, voting } = useActions()

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

	useEffect(()=>{},[voting])

	return (
		<div className={styles.movie}>
			{isLoading && <MovieSkeleton />}
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
										Избранное
									</button>
									{movie.media.length === 1 &&
										movie.media[0]?.items.length === 1 && (
											<button
												className={styles.play}
												onClick={() =>
													handleMovie(movie.media[0].items[0].file)
												}
											>
												<MaterialIcon name={'MdPlayArrow'} />
												Смотреть
											</button>
										)}
								</div>

								{movieId && (
									<Vote
										vote={vote}
										my_vote={myVote}
										onClick={( i) => voting(i)}
										movieId={movieId}
									/>
								)}
							</div>
						</div>
						<MovieDescription movie={movie} />
					</div>

					{movie.media.length > 0 && movie.media[0]?.items.length > 1 && (
						<div className={styles.movieContainer}>
							<Tabs media={movie.media} fn={handleMovie} logo={movie.logo} />
						</div>
					)}
					<h3 className={'text-white text-2xl mb-3 mt-6'}>Рекомендуем</h3>
					<Gallery items={collectionsToItems(collection)} />
				</>
			)}
		</div>
	)
}

export default Movie

