import { router } from 'next/client'
import { FC, useEffect, useState } from 'react'

import Meta from '../../../utils/meta/Meta'
import CatalogLoader from '../../loaders/CatalogLoader'
import Pagination from '../../ui/Pagination'
import SkeletonLoader from '../../ui/SkeletonLoader'
import Gallery from '../../ui/gallery/Gallery'
import Heading from '../../ui/heading/Heading'

import { useGenre } from './useGenre'

const CatalogPortal: FC = () => {
	const query = router.query
	const { movies, title, isLoading, pagination } = useGenre()
	const [titleGenre, setTitleGenre] = useState('')

	useEffect(() => {
		setTitleGenre('')
	}, [query.id])

	useEffect(() => {
		if (title) setTitleGenre(title)
	}, [title, query])

	return (
		<Meta title={titleGenre}>
			<div className={'px-5'}>
				{titleGenre ? (
					<Heading
						title={titleGenre}
						className="pl-40 lg:px-5  lg:mb-3 lg:pt-5 px-5 pt-2 mb-1"
					/>
				) : (
					<div className="p-5 pb-0">
						<SkeletonLoader className="h-12" />
					</div>
				)}
				{!isLoading ? (
					<>
						{movies && <Gallery movies={movies} />}
						{pagination && pagination.totalPages > 1 && (
							<Pagination pagination={pagination} />
						)}
					</>
				) : (
					<CatalogLoader />
				)}
			</div>
		</Meta>
	)
}

export default CatalogPortal
