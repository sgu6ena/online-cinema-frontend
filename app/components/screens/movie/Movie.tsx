import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'

import { getGenreUrl } from '../../../config/url.config'
import { PortalMovieService } from '../../../services/portalMovie.service'
import { getCountryListAlt } from '../../../utils/movie/getCountryList'
import { getGenresList } from '../../../utils/movie/getGenresList'
import FilmTag from '../../ui/FilmTag'
import Heading from '../../ui/heading/Heading'
import Vote from '../../ui/vote/Vote'

import styles from './Movie.module.scss'
import Rating from './Rating'
import Tabs from './Tabs'
import { usePortalMovie } from './usePortalMovie'

const DynamicPlayer = dynamic(() => import('react-hls-player'), {
	ssr: false,
})

const Movie: FC = () => {
	const { isLoading, movie } = usePortalMovie()
	const [idFile, setIdFile] = useState('')
	const [url, setUrl] = useState('')
	const inputEl = useRef(null)

	const handleMovie = (id: number) => {
		setIdFile(id.toString())
	}

	useEffect(() => {
		setUrl('')
	}, [movie])
	useEffect(() => {
		if (idFile !== '')
			PortalMovieService.getUrl(idFile).then((data) => {
				setUrl(data.data.url)
			})
	}, [idFile, url])
	return (
		<>
			<div className={styles.movie}>
				{isLoading && 'load...'}
				{movie && (
					<>
						<div className={styles.main}>
							<div className={styles.description}>
								<Heading title={movie.title} className="mb-5 " />

								<p className="my-5 pb-5">
									<span>{movie.year}</span> |{' '}
									{movie.genre.map((genre) => (
										<>
											<Link href={getGenreUrl(genre.id.toString())}>
												<a>{genre.name} </a>
											</Link>{' '}
											|{' '}
										</>
									))}
									<span>{getCountryListAlt(movie.country)}</span>
								</p>
								<p></p>
								<p>Длительность: {movie.length} мин.</p>
								<p>Режиссер: {getGenresList(movie.creator)}</p>
								<p>Продюссер: {getGenresList(movie.producer)}</p>
								<p>В ролях: {getGenresList(movie.in_the_roles)}</p>
								<p className="my-5 mt-5 pt-5">{movie.review}</p>
							</div>
							<div className={styles.right}>
								<div className={styles.image}>
									{movie.logo && (
										<Image
											src={movie.logo}
											alt={movie.title}
											width={450}
											height={650}
											priority
											unoptimized
										/>
									)}
								</div>
								<Rating
									kp={movie.rate_kp}
									imdb={movie.rate_imdb}
									age={movie.rate_age}
								/>

								<div className="flex-center-between mt-3">
									<FilmTag type={movie.access} />
									<Vote vote={movie.vote} my_vote={3} onClick={() => 5} />
								</div>
							</div>
						</div>

						<div className="pt-1 mb-5 pl-layout">
							<Tabs media={movie.media} fn={handleMovie} />
							<DynamicPlayer
								width="100%"
								height="auto"
								controls
								playerRef={inputEl}
								src={url}
								autoPlay={false}
								className={'rounded-3xl mt-3'}
							/>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default Movie
