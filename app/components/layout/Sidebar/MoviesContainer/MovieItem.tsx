import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getGenresUrl, getMoviesUrl } from '../../../../config/api.config'
import { IMoviePortal } from '../../../../shared/types/movie.types'
import { getGenresListEach } from '../../../../utils/movie/getGenresList'
import MaterialIcon from '../../../ui/MaterialIcon'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMoviePortal }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMoviesUrl(movie.id)}>
				<a>
					<Image
						draggable={false}
						height={97}
						width={65}
						src={movie.logo}
						alt={movie.title}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genre.map((genre, idx) => (
							<Link href={getGenresUrl(genre.id)} key={genre.id}>
								<a>{getGenresListEach(idx, movie.genre.length, genre.name)}</a>
							</Link>
						))}
					</div>
				</div>

				<div className={styles.rating}>
					<MaterialIcon name={'MdStarRate'} />
					<span>{movie.rate_imdb.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
