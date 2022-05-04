import Link from 'next/link'
import { FC, useEffect } from 'react'

import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'
import { IMovieListPortal } from './movie-list.interface'

const MovieList: FC<IMovieListPortal> = ({ link, title, movies }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies
				.sort(() => Math.random() - 0.5)
				.slice(0, 3)
				.map((movie) => (
					<MovieItem movie={movie} key={movie.id} />
				))}
			<Link href={link}>
				<a className={styles.button}>Больше фильмов</a>
			</Link>
		</div>
	)
}

export default MovieList
