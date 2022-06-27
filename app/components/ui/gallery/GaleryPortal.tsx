import { FC } from 'react'

import { getMoviesUrl } from '../../../config/api.config'
import { IMoviePortal } from '../../../shared/types/movie.types'
import styles from '../catalog-movies/Catalog.module.scss'

import GalleryItem from './GalleryItem'

const GaleryPortal: FC<{ movies: IMoviePortal[] }> = ({ movies }) => {
	return (
		<section className={styles.movies}>
			{movies.map((movie: IMoviePortal) => (
				<GalleryItem
					key={movie.id.toString()}
					item={{
						name: movie.title,
						link: getMoviesUrl(movie.id),
						posterPath: movie.logo,
						year:movie.year,
						title:movie.title,
						access:movie.access,
						age:movie.rate_age,
						content: {
							title: movie.title,
							// subTitle:
							// 	(movie.rate_age && movie.rate_age + ' | ') +
							// 	(movie.access === 1 ? ' подписка ' : ' бесплатно '),
						},
					}}
					variant="vertical"
				/>
			))}
		</section>
	)
}

export default GaleryPortal
