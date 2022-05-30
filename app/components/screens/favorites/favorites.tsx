import { router } from 'next/client'
import { FC, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

import { getMoviesUrl } from '../../../config/api.config'
import SkeletonLoader from '../../ui/SkeletonLoader'
import styles from '../../ui/catalog-movies/Catalog.module.scss'
import GalleryItem from '../../ui/gallery/GalleryItem'
import Heading from '../../ui/heading/Heading'
import CatalogLoader from '../../loaders/CatalogLoader'

import { useBookmarks } from './useBookmarks'

const Favorites: FC = () => {
	const handlePagination = (page: any) => {
		const path = router.pathname
		const query = router.query
		query.page = page.selected + 1
		router.push({
			pathname: path,
			query: query,
		})
	}
	const { movies, isLoading, pagination } = useBookmarks()
	useEffect(() => {
		console.log(movies)
	}, [movies, pagination, isLoading])
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
							<ReactPaginate
								className='paginate'
								breakLabel='...'
								nextLabel=' >'
								onPageChange={handlePagination}
								pageRangeDisplayed={2}
								pageCount={pagination.totalPages}
								previousLabel='< '
								activeClassName='active'
								initialPage={pagination.currentPage - 1}
							/>
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
