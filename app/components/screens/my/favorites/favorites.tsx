import { FC, useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'
import { useFavorites } from '../../../../hooks/useFavorites'
import CatalogLoader from '../../../loaders/CatalogLoader'
import Gallery from '../../../ui/gallery/Gallery'

const Favorites: FC = () => {
	const { getFavorites } = useActions()
	const { pagination, movies, isLoading } = useFavorites()
	const { user } = useAuth()
	const [page, setPage] = useState(1)
	const showMore = () => {
		setPage(page + 1)
	}

	useEffect(() => {
		if (user) {
			getFavorites({ page: page.toString() })
		}
	}, [page])
	return (
		<>
			{movies && pagination ? (
				<>
					<Gallery movies={movies} />
					{!isLoading ? (
						<div className={'flex justify-center'}>
							{pagination.totalPages > page && (
								<button
									className='flex border border-primary gap-4 mt-5 pl-8 py-2 rounded-lg pr-5 items-center'
									onClick={showMore}
								>
									Показать еще <MdKeyboardArrowDown className='h-6 w-6' />
								</button>
							)}
						</div>
					) : (
						<CatalogLoader />
					)}
				</>
			) : (
				<CatalogLoader />
			)}
		</>
	)
}

export default Favorites
