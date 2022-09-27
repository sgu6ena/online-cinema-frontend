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
					item={movie}
					variant="vertical"
				/>
			))}
		</section>
	)
}

export default Gallery
