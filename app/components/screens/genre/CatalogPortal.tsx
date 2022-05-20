import { FC, useEffect } from 'react'

import { getMoviesUrl } from '../../../config/api.config'
import Meta from '../../../utils/meta/Meta'
import GalleryItem from '../../ui/gallery/GalleryItem'
import Heading from '../../ui/heading/Heading'

import styles from '../../ui/catalog-movies/Catalog.module.scss'
import { useGenre } from './useGenre'
import ReactPaginate from 'react-paginate'
import { router } from 'next/client'


const CatalogPortal: FC = () => {

	const query = router.query
	const { movies, title, data, isLoading, pagination } = useGenre()
	useEffect(() => {

	}, [query])

	const handlePagination = (page: any) => {
		const path = router.pathname
		const query = router.query
		query.page = page.selected + 1
		router.push({
			pathname: path,
			query: query,
		})
	}

	return (
		<Meta title={title || ''}>
			{title && <Heading title={title} className={styles.heading} />}
			{!isLoading &&
				<>

					<section className={styles.movies} key={data && data.data.pagination.currentPage}>
						{movies && movies.map((movie) => (
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
					{pagination && pagination.totalPages > 1 && <ReactPaginate
						className='paginate'
						breakLabel='...'
						nextLabel=' >'
						onPageChange={handlePagination}
						pageRangeDisplayed={2}
						pageCount={pagination.totalPages}
						previousLabel='< '
						activeClassName='active'
						initialPage={pagination.currentPage - 1}
					/>}
				</>}
		</Meta>
	)
}

export default CatalogPortal
