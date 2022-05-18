import Image from 'next/image'

import { FC, useEffect, useState } from 'react'


import { PortalMovieService } from '../../../services/portalMovie.service'

import FilmTag from '../../ui/FilmTag'

import Vote from '../../ui/vote/Vote'

import styles from './Movie.module.scss'
import Rating from './Rating'
import Tabs from './Tabs'
import { usePortalMovie } from './usePortalMovie'

import { useRouter } from 'next/router'


import VideoPLayer from '../../ui/videoPlayer/VideoPLayer'
import MovieDescription from './MovieDescription'
import MovieSkeleton from './MovieSkeleton'


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

							<div className='flex-center-between mt-3'>
								<FilmTag type={movie.access} />
								<Vote vote={movie.vote} my_vote={3} onClick={() => 5} />
							</div>
						</div>
					</div>

					<div className='p-layout mx-layout'>
						<Tabs media={movie.media} fn={handleMovie} />
						<VideoPLayer url={url} play={play} typeContent={movie.type_content} slug={movie.id} />
					</div>
				</>
			)}
		</div>
	)
}

export default Movie
