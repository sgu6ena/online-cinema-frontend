import { FC, useEffect, useState } from 'react'

import { useActions } from '@/hooks/useActions'
import { useHistory } from '@/hooks/useHistory'
import CatalogLoader from '../../../loaders/CatalogLoader'
import Gallery from '../../../ui/gallery/Gallery'
import ShowMore from '../../../ui/showMore/showMore'

const History: FC = () => {
	const { movies, isLoading, pagination } = useHistory()
	const { getHistory } = useActions()
	const [page, setPage] = useState(1)
	useEffect(() => {
		getHistory({ page: page.toString() })
	}, [page])
	return (
		<>
			{movies.length>0 && pagination &&	<Gallery movies={movies} />	}
			{isLoading && <CatalogLoader />}
			{!isLoading &&
				<ShowMore
					totalPages={pagination?.totalPages}
					setPage={setPage}
					page={page}
				/>
		}
		</>
	)
}

export default History
