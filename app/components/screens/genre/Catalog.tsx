import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useGenreById } from '@/hooks/useGenre'
import { useSearch } from '@/hooks/useSearchFilters'
import { getGenreById } from '@/store/genre/genre.actions'
import Meta from '../../../utils/meta/Meta'
import CatalogLoader from '../../loaders/CatalogLoader'
import SkeletonLoader from '../../ui/SkeletonLoader'
import Gallery from '../../ui/gallery/Gallery'
import Heading from '../../ui/heading/Heading'
import ShowMore from '../../ui/showMore/showMore'
import SortBy from '../../ui/sortMenu/sortBy'

import { GENRES_ALT } from './data.genres'

const Catalog: FC = () => {
	const { user } = useAuth()
	const { getFavoritesIds } = useActions()
	useEffect(() => {
		if (user) {
			getFavoritesIds()
		}
	}, [])
	const { getSearchParameters, getGenreById, setSort } = useActions()
	const {

		genre,
		category,
		country,
		type_content,
		sort,
		currentSort,

		isLoading: isLoadingSearch,
	} = useSearch()
	const { query } = useRouter()
	const genreId = (query.id && String(query.id)) || ''
	const {
		isLoading: isLoadingGenre,
		movies,
		genreId: stateGenreId,
		pagination,
		title,
		sortAvailable,
		totalPages,
	} = useGenreById()
	const [page, setPage] = useState(1)
	const [titleGenre, setTitleGenre] = useState(title)
	const isLoading = isLoadingGenre


	useEffect(() => {
		getSearchParameters()
	}, [])

	useEffect(() => {
		setTitleGenre(
			[...GENRES_ALT, ...genre].find((item) => item.id.toString() == genreId)
				?.name || title
		)
	}, [genreId, genre, title])

	useEffect(() => {
		setPage(1)
	}, [genreId, currentSort, category])

	useEffect(() => {
		if (typeof currentSort === 'string') {
			getGenreById({
				genreId,
				params: {
					page: page.toString(),
					id_sort: currentSort,

				},
			})
		}
	}, [genreId, page, currentSort, category])



	return (
		<Meta
			title={titleGenre || 'PORTAL'}
			description="Фильмы на любой вкус, мультфильмы, популярные сериалы, новинки от ведущих мировых киностудий"
			image={'https://idc.md/storage/app/media/images/banners/portal/main.png'}
		>
			<div className={'px-5'}>
				<div className={'flex justify-between lg:flex-row flex-col'}>
					{!isLoading  ? (
						<div className={'flex justify-between items-center lg:pr-5 pr-2'}>
							<Heading
								title={titleGenre }
								className="lg:px-5 text-3xl lg:mb-3 lg:pt-5 md:px-5 px-0 pt-2 mb-2"
							/>
						</div>
					) : (
						<div className="p-5 pb-0">
							<SkeletonLoader className="h-12" />
						</div>
					)}

					<div className={'flex gap-2 items-end lg:flex-row flex-col'}>
						<SortBy
							sortId={currentSort}
							onChange={setSort}
							options={sort}
							title={'сортировать по'}
						/>
					</div>
				</div>

				{!isLoading || (movies && movies.length) ? (
					movies && <Gallery movies={movies} />
				) : (
					<div className='p-3 pb-0'>
						<CatalogLoader />
					</div>
				)}

				{!isLoading ? (
					pagination && (
						<ShowMore
							totalPages={pagination?.totalPages}
							setPage={setPage}
							page={page}
						/>
					)
				) : (
					<div className='p-3 pt-0 pb-0'><CatalogLoader /></div>
				)}
			</div>
		</Meta>
	)
}

export default Catalog
