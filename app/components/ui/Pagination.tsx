import { router } from 'next/client'
import { FC } from 'react'
import ReactPaginate from 'react-paginate'

import { IPagination } from '../../shared/types/movie.types'

const Pagination: FC<{ pagination: IPagination }> = ({ pagination }) => {
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
		<div>
			<ReactPaginate
				className="paginate"
				breakLabel="..."
				nextLabel=" >"
				onPageChange={handlePagination}
				pageRangeDisplayed={2}
				pageCount={pagination.totalPages}
				previousLabel="< "
				activeClassName="active"
				initialPage={pagination.currentPage - 1}
			/>
		</div>
	)
}

export default Pagination
