import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { getMoviesUrl } from '../../../config/api.config'
import Meta from '../../../utils/meta/Meta'
import GalleryItem from '../../ui/gallery/GalleryItem'
import Heading from '../../ui/heading/Heading'

import styles from '../../ui/catalog-movies/Catalog.module.scss'
import { useGenre } from './useGenre'
import ReactPaginate from 'react-paginate'

const CatalogPortal: FC = () => {

	const { movies, title, data, isLoading, handlePagination, page } = useGenre()

	return (
		<Meta title={title || ''}>
			{!isLoading &&
				<>
					<Heading title={title || 'Побдорка'} className={styles.heading} />
					<section className={styles.movies} key={data && data.data.pagination.currentPage}>
						{data && data.data.data.items.map((movie) => (
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
					<ReactPaginate
					className="paginate"
					breakLabel="..."
					nextLabel=" >"
					onPageChange={handlePagination}
					pageRangeDisplayed={2}
					pageCount={data.data.pagination.totalPages}
					previousLabel="< "
					activeClassName="active"
					initialPage={data.data.pagination.currentPage - 1}
				/>
				</>}


		</Meta>
	)
}

export default CatalogPortal
