import { FC } from 'react'


import CatalogLoader from '../../loaders/CatalogLoader'
import Pagination from '../../ui/Pagination'

import GaleryPortal from '../../ui/gallery/GaleryPortal'
import Heading from '../../ui/heading/Heading'


import { useBookmarks } from './useBookmarks'
import { useRouter } from 'next/router'
import AuthButton from './AuthButton'

const Favorites: FC = () => {
	const { movies, isLoading, pagination, isUser } = useBookmarks()
	const {asPath}=useRouter()
	return (
		<div>
			<Heading title={'Избранное'} />
			{!isUser ? (
				<div className='mt-32 text-center'>
					<div className='mb-5 text-2xl'>Для просмотра вашего избранного вы должны войти</div>
					<AuthButton slug={asPath} />
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
