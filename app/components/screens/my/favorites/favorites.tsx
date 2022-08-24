import { useRouter } from 'next/router'
import { FC } from 'react'

import CatalogLoader from '../../../loaders/CatalogLoader'
import Pagination from '../../../ui/Pagination'
import Gallery from '../../../ui/gallery/Gallery'

import AuthButton from './AuthButton'
import { useBookmarks } from './useBookmarks'

const Favorites: FC = () => {
	const { movies, isLoading, pagination, isUser } = useBookmarks()
	const { asPath } = useRouter()
	return (
		<div className="m-10">
			{!isUser ? (
				<div className="mt-32 text-center">
					<div className="mb-5 text-2xl">
						Для просмотра вашего избранного вы должны войти
					</div>
					<AuthButton slug={asPath} />
				</div>
			) : !isLoading && movies && pagination ? (
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
