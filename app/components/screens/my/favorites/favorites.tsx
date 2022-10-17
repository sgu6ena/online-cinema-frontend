import { FC, useEffect, useState } from 'react'

import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'
import { useFavorites } from '../../../../hooks/useFavorites'
import CatalogLoader from '../../../loaders/CatalogLoader'
import Gallery from '../../../ui/gallery/Gallery'
import ShowMore from '../../../ui/showMore/showMore'

const Favorites: FC = () => {
	const { getFavorites } = useActions()
	const { pagination, movies, isLoading } = useFavorites()
	const [page, setPage] = useState(1)
	const { user } = useAuth()

	useEffect(() => {
		if (user) {
			getFavorites({ page: page.toString() })
		}
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

export default Favorites
