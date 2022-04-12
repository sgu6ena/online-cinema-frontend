import Link from 'next/link'
import { FC } from 'react'

import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'
import { IMovieList } from './movie-list.interface'

const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={styles.list}>
			<div className="heading">{title}</div>
			{movies.map((movie) => (
				<MovieItem movie={movie} key={movie._id} />
			))}
			<Link href="">
				<a className={styles.button}>Больше фильмов</a>
			</Link>
		</div>
	)
}

export default MovieList
