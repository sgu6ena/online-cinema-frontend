import { FC } from 'react'
import { IMoviePortal } from '../../../shared/types/movie.types'

import styles from './Galery.module.scss'
import GalleryItemAlt from './GalleryItemAlt'

const Gallery: FC<{ movies: IMoviePortal[] }> = ({ movies }) => {
	return (
		<section className={styles.movies}>
			{movies.map((movie: IMoviePortal) => (
				<GalleryItemAlt
					key={movie.id.toString()}
					movie={movie}
				/>
			))}
		</section>
	)
}

export default Gallery
