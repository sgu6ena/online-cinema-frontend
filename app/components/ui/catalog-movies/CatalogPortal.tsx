import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC } from 'react'
import ReactPaginate from 'react-paginate'

import { getMoviesUrl } from '../../../config/api.config'
import Meta from '../../../utils/meta/Meta'
import GalleryItem from '../gallery/GalleryItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'

import styles from './Catalog.module.scss'
import { ICatalogPortal } from './catalog.interface'

const CatalogPortal: FC<ICatalogPortal> = ({ title, description, data }) => {
	const router = useRouter()

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
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			{description && (
				<Description text={description} className={styles.description} />
			)}

			<section className={styles.movies}>
				{data.data.items.map((movie) => (
					<GalleryItem
						item={{
							name: movie.title,
							link: getMoviesUrl(movie.id),
							posterPath: movie.logo,
							content: {
								title: movie.title,
							},
						}}
						variant="vertical"
						key={movie.id}
					/>
				))}
			</section>

			<ReactPaginate
				className="paginate"
				breakLabel="..."
				nextLabel=" >"
				onPageChange={handlePagination}
				pageRangeDisplayed={2}
				pageCount={data.pagination.totalPages}
				previousLabel="< "
				activeClassName="active"
				initialPage={data.pagination.currentPage - 1}
			/>
		</Meta>
	)
}

export default CatalogPortal
