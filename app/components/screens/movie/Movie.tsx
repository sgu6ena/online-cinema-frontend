import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { PortalMovieService } from '../../../api/portalMovie.service'
import MovieSkeleton from '../../loaders/MovieSkeleton'
import FilmTag from '../../ui/FilmTag'
import MaterialIcon from '../../ui/MaterialIcon'
import VideoPLayer from '../../ui/videoPlayer/VideoPLayer'
import Vote from '../../ui/vote/Vote'

import styles from './Movie.module.scss'
import MovieDescription from './MovieDescription'
import Rating from '../../ui/Rating'
import Tabs from './Tabs'
import { usePortalMovie } from './usePortalMovie'

const Movie: FC = () => {
	const { asPath } = useRouter()
	const { isLoading, movie } = usePortalMovie()
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
							/>
							<div className={styles.actions}>
								<div className={styles.buttons}>
									<button>
										<MaterialIcon name={'MdOutlineHomeMax'} /> Трейлер
									</button>
									<button>
										<MaterialIcon name={'MdBookmarkBorder'} />
										Избранное
									</button>
								</div>

								<Vote vote={movie.vote} my_vote={3} onClick={() => 5} />
							</div>
						</div>
						<MovieDescription movie={movie} />
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

							<div className={styles.votes}>
								<FilmTag type={movie.access} />
							</div>
						</div>
					</div>

					<div className={styles.movieContainer}>
						<Tabs media={movie.media} fn={handleMovie} />
					</div>
				</>
			)}
		</div>
	)
}

export default Movie
