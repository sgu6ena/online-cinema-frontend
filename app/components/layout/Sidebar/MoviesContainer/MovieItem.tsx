import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getMoviesUrl } from '../../../../config/api.config'
import { getGenresUrl } from '../../../../config/api.config'
import { IMovie } from '../../../../shared/types/movie.types'
import { getGenresListEach } from '../../../../utils/movie/getGenresList'
import MaterialIcon from '../../../ui/MaterialIcon'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMoviesUrl(movie.slug)}>
				<a>
					<Image
						draggable={false}
						height={97}
						width={65}
						src={movie.poster}
						alt={movie.title}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map((genre, idx) => (
							<Link href={getGenresUrl(genre.slug)} key={genre._id}>
								<a>{getGenresListEach(idx, movie.genres.length, genre.name)}</a>
							</Link>
						))}
					</div>
				</div>

				<div className={styles.rating}>
					<MaterialIcon name={'MdOutlineStarRate'} />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
