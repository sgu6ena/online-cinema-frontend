import { FC } from 'react'

import CatalogLoader from '../../../loaders/CatalogLoader'
import Pagination from '../../../ui/Pagination'
import Gallery from '../../../ui/gallery/Gallery'

import { useBookmarks } from './useBookmarks'

const Favorites: FC = () => {
	const { movies, isLoading, pagination } = useBookmarks()

	return (
		<div>
			{!isLoading && movies && pagination ? (
				<>
					<Gallery movies={movies} />
					{pagination.totalPages > 1 && <Pagination pagination={pagination} />}
				</>
			) : (
				<CatalogLoader />
			)}
		</div>
	)
}

export default Favorites
