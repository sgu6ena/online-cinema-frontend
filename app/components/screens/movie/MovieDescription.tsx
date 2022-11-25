import Link from 'next/link'
import { FC, Fragment } from 'react'

import { getGenreUrl } from '../../../config/url.config'
import { IMoviePortalFull } from '../../../shared/types/movie.types'
import { minuteToHours } from '../../../utils/date/minuteToHours'
import { getCountryList } from '../../../utils/movie/getCountryList'
import { getGenresList } from '../../../utils/movie/getGenresList'
import Heading from '../../ui/heading/Heading'
import Rating from '../../ui/rating/Rating'

import styles from './Movie.module.scss'

const MovieDescription: FC<{ movie: IMoviePortalFull }> = ({ movie }) => {
	return (
		<div className={styles.description}>
			<Heading title={movie.title} className={styles.laptop} />
			<p>
				<Rating imdb={movie.rate_imdb} kp={movie.rate_kp} />
			</p>
			<p className={styles.genres}>
				<a>{movie.year}</a>
				<span>·</span>
				{movie.genre.map((genre) => (
					<Fragment key={genre.id}>
						<Link href={getGenreUrl(genre.id)}>
							<a>{genre.name}</a>
						</Link>
						<span>·</span>
					</Fragment>
				))}
				<>{minuteToHours(movie.length)}</>
				{movie.rate_age && (
					<>
						<span>·</span>
						<strong className={styles.age}>{movie.rate_age}</strong>
					</>
				)}
			</p>

			<p>
				<strong className={styles.subtitle}>Режиссер:</strong>
				{getGenresList(movie.creator)}
			</p>
			<p>
				<strong className={styles.subtitle}>Продюссер:</strong>
				{getGenresList(movie.producer)}
			</p>
			<p>
				<strong className={styles.subtitle}>В ролях:</strong>
				{getGenresList(movie.in_the_roles)}
			</p>
			<p>
				<strong className={styles.subtitle}>Страны:</strong>
				{getCountryList(movie.country)}
			</p>
			<h2>О фильме</h2>
			<p>{movie.review}</p>
		</div>
	)
}

export default MovieDescription
