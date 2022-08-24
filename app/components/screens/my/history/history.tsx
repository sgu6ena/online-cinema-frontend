import { FC } from 'react'

import CatalogLoader from '../../../loaders/CatalogLoader'
import Pagination from '../../../ui/Pagination'
import Gallery from '../../../ui/gallery/Gallery'

import { useHistory } from './useHistory'

const History: FC = () => {
	const { movies, isLoading, pagination } = useHistory()

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

export default History
