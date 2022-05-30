import { FC } from 'react'

import { LINKS } from '../../../config/links'
import CatalogLoader from '../../loaders/CatalogLoader'
import Pagination from '../../ui/Pagination'
import styles from '../../ui/catalog-movies/Catalog.module.scss'
import GaleryPortal from '../../ui/gallery/GaleryPortal'
import Heading from '../../ui/heading/Heading'
import AuthButton from '../../ui/videoPlayer/Placeholder/AuthButton'

import { useBookmarks } from './useBookmarks'

const Favorites: FC = () => {
	const { movies, isLoading, pagination, isUser } = useBookmarks()

	return (
		<div>
			<Heading title={'Избранное'} />
			{!isUser ? (
				<div className='mt-32 text-center'>
					<div className='mb-5 text-2xl'>Для просмотра вашего избранного вы должны войти</div>
					<AuthButton slug={LINKS.LOGIN} />
				</div>
			) : !isLoading && movies && pagination ? (
				<>
					<GaleryPortal movies={movies} />
					{pagination.totalPages > 1 && <Pagination pagination={pagination} />}
				</>
			) : (
				<CatalogLoader />
			)}
		</div>
	)
}

export default Favorites
