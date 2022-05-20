import React, { FC } from 'react'
import styles from './Movie.module.scss'
import Heading from '../../ui/heading/Heading'
import Link from 'next/link'
import { getGenreUrl } from '../../../config/url.config'
import { getCountryListAlt } from '../../../utils/movie/getCountryList'
import { getGenresList } from '../../../utils/movie/getGenresList'

import { IMoviePortalFull } from '../../../shared/types/movie.types'

const MovieDescription: FC<{ movie: IMoviePortalFull }> = ({ movie }) => {
	return (
		<div>
			<div className={styles.description}>
				<Heading title={movie.title} className='mb-5 ' />

				<p className='my-5 pb-5'>
					<span>{movie.year}</span> |{' '}
					{movie.genre.map((genre) => (
						<>
							<Link href={getGenreUrl(genre.cid.toString())}>
								<a>{genre.title} </a>
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
				<p className='my-5 mt-5 pt-5'>{movie.review}</p>
			</div>
		</div>
	)
}

export default MovieDescription