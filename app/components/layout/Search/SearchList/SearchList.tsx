import Link from 'next/link'
import { FC } from 'react'

import { getMoviesUrl } from '../../../../config/api.config'
import { IMoviePortal } from '../../../../shared/types/movie.types'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMoviePortal[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link href={getMoviesUrl(movie.id)} key={movie.id}>
						<a title={movie.title}>
							<img
								src={movie.logo}
								width={50}
								height={50}
							/>
							<span>{movie.title}</span>
						</a>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Фильм не найден!</div>
			)}
		</div>
	)
}

export default SearchList
