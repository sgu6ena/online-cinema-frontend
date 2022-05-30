import { router } from 'next/client'
import { FC, useEffect, useState } from 'react'

import Meta from '../../../utils/meta/Meta'
import CatalogLoader from '../../loaders/CatalogLoader'
import Pagination from '../../ui/Pagination'
import SkeletonLoader from '../../ui/SkeletonLoader'
import styles from '../../ui/catalog-movies/Catalog.module.scss'
import GaleryPortal from '../../ui/gallery/GaleryPortal'
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
			{titleGenre ? (
				<Heading title={titleGenre} className={styles.heading} />
			) : (
				<div className='p-5 pb-0'>
					<SkeletonLoader className='h-12' />
				</div>
			)}
			{!isLoading ? (
				<>
					{movies && <GaleryPortal movies={movies} />}
					{pagination && pagination.totalPages > 1 && (
						<Pagination pagination={pagination} />
					)}
				</>
			) : (
				<CatalogLoader />
			)}
		</Meta>
	)
}

export default CatalogPortal
