import { FC } from 'react'
import ReactPaginate from 'react-paginate'

import { getMoviesUrl } from '../../../config/api.config'
import SkeletonLoader from '../../ui/SkeletonLoader'
import styles from '../../ui/catalog-movies/Catalog.module.scss'
import GalleryItem from '../../ui/gallery/GalleryItem'
import Heading from '../../ui/heading/Heading'
import CatalogLoader from '../../loaders/CatalogLoader'

import { useBookmarks } from './useBookmarks'

import Pagination from '../../ui/Pagination'

const Favorites: FC = () => {

	const { movies, isLoading, pagination } = useBookmarks()

	return (
		<div>
			<Heading title={'Избранное'} />
			{!isLoading && movies && pagination ? (
				<>
					<section className={styles.movies} key={pagination.currentPage}>
						{movies.map((movie: any) => (
							<>
								<GalleryItem
									key={movie.id.toString()}
									item={{
										name: movie.title,
										link: getMoviesUrl(movie.id),
										posterPath: movie.logo,
										content: {
											title: movie.title,
											subTitle:
												(movie.rate_age && movie.rate_age + ' | ') +
												(movie.access === 1 ? ' подписка ' : ' бесплатно '),
										},
									}}
									variant='vertical'
								/>
							</>
						))}
					</section>
					{pagination ? (
						pagination.totalPages > 1 && (
							<Pagination pagination={pagination}/>
						)
					) : (
						<SkeletonLoader />
					)}
				</>
			) : (
				<CatalogLoader />
			)}
		</div>
	)
}

export default Favorites
