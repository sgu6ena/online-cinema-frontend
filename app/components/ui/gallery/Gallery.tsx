import { FC, useEffect } from 'react'
import { IMoviePortal } from '../../../shared/types/movie.types'

import styles from './Galery.module.scss'
import GalleryItemAlt from './GalleryItemAlt'
import { useActions } from '../../../hooks/useActions'

const Gallery: FC<{ movies: IMoviePortal[] }> = ({ movies }) => {
	const { getFavorites } = useActions()
	useEffect(() => {
		getFavorites()
	}, [])
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
