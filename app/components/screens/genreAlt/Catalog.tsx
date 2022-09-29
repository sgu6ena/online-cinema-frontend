import { FC, useEffect, useState } from 'react'
import { useGenreById } from '../../../hooks/useGenre'
import { useActions } from '../../../hooks/useActions'
import { useRouter } from 'next/router'
import { getGenreById } from '../../../store/genre/genre.actions'
import Meta from '../../../utils/meta/Meta'
import Heading from '../../ui/heading/Heading'
import SkeletonLoader from '../../ui/SkeletonLoader'
import Gallery from '../../ui/gallery/Gallery'
import CatalogLoader from '../../loaders/CatalogLoader'
import Button from '../../ui/form-elemets/Button'
import SortMenu from '../../ui/sortMenu/sortMenu'
import SortByYear from '../../ui/sortMenu/sortByYear'
import { useSearch } from '../../../hooks/useSearchFilters'
import { GENRES_ALT } from './data.genres'

const Catalog: FC = () => {

	const { getSearchParameters, getGenreById } = useActions()
	const { year, genre } = useSearch()
	const { query } = useRouter()
	const genreId = query.id && String(query.id) || ''
	const { isLoading, movies, genreId: stateGenreId, title, sortAvailable, totalPages } = useGenreById()

	const [page, setPage] = useState(1)
	const [sortId, setSortId] = useState<'1' | '2' | '3' | '4' | '5'>('1')
	const [yearSortId, setYearSortId] = useState('1')
	const [titleGenre, setTitleGenre] = useState('')


	const showMore = () => {
		setPage(page + 1)
	}

	useEffect(() => {
		getSearchParameters()
	}, [])

	useEffect(() => {
		setTitleGenre([...GENRES_ALT, ...genre].find(item => item.id.toString() == genreId)?.name || '')
	}, [genreId, genre])


	useEffect(() => {
		setPage(1)

	}, [genreId, sortId])

	useEffect(() => {
		if (typeof yearSortId === 'string') {
			getGenreById({
				genreId,
				params: {
					page: page.toString(),
					id_sort: sortId,
					year: yearSortId,
				},
			})
		}
	}, [genreId, page, sortId, yearSortId])


	return (
		<Meta title={titleGenre || 'PORTAL'}
					description='Фильмы на любой вкус, мультфильмы, популярные сериалы, новинки от ведущих мировых киностудий'
					image={'https://idc.md/storage/app/media/images/banners/portal/main.png'}>
			<div className={'px-5'}>
				<div className={'flex justify-between'}>
					{titleGenre ?
						<div className={'flex justify-between items-center lg:pr-5 pr-2'}>
							<Heading
								title={titleGenre}
								className='lg:px-5  lg:mb-3 lg:pt-5 px-5 pt-2 mb-1'
							/>

						</div>
						:
						<div className='p-5 pb-0'>
							<SkeletonLoader className='h-12' />
						</div>
					}


					<div className={'flex'}>
						<SortByYear sortId={yearSortId?.toString() || ''} onChange={setYearSortId} />
						<SortMenu sortId={sortId} onChange={setSortId} />
					</div>

				</div>

				{!isLoading || movies && movies.length ? movies && <Gallery movies={movies} /> : <CatalogLoader />}

				{!isLoading ?
					<div className={'flex justify-center'}>
						{totalPages > page && <Button onClick={showMore}> Показать еще</Button>}
					</div> : <CatalogLoader />}
			</div>
		</Meta>
	)
}

export default Catalog