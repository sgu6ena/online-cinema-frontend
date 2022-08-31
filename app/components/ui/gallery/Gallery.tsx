import { FC } from 'react'

import { getMoviesUrl } from '../../../config/api.config'
import { IMoviePortal } from '../../../shared/types/movie.types'

import styles from './Galery.module.scss'
import GalleryItem from './GalleryItem'

const Gallery: FC<{ movies: IMoviePortal[] }> = ({ movies }) => {
	return (
		<section className={styles.movies}>
			{movies.map((movie: IMoviePortal) => (
				<GalleryItem
					key={movie.id.toString()}
					item={{
						name: movie.title,
						link: getMoviesUrl(movie.id),
						posterPath: movie.logo,
						year: movie.year,
						title: movie.title,
						access: movie.access,
						age: movie.rate_age,
						rate_kp: movie.rate_kp,
						rate_imdb: movie.rate_imdb,
						genres:movie.genre,
						content:movie.season?{
							title:`Сезон ${movie.season} `,
							subTitle:`Серия ${movie.episode} `
						}:undefined
					}}
					variant="vertical"
				/>
			))}
		</section>
	)
}

export default Gallery
