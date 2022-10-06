import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import { useGenreById } from '../../../hooks/useGenre'
import { useSearch } from '../../../hooks/useSearchFilters'
import { getGenreById } from '../../../store/genre/genre.actions'
import Meta from '../../../utils/meta/Meta'
import CatalogLoader from '../../loaders/CatalogLoader'
import SkeletonLoader from '../../ui/SkeletonLoader'

import Gallery from '../../ui/gallery/Gallery'
import Heading from '../../ui/heading/Heading'
import SortBy from '../../ui/sortMenu/sortBy'

import { GENRES_ALT } from './data.genres'

import { MdKeyboardArrowDown } from 'react-icons/md'

const Catalog: FC = () => {
	const { user } = useAuth()
	const { getFavorites } = useActions()
	useEffect(() => {
		if (user) {
			getFavorites()
		}
	}, [])
	const { getSearchParameters, getGenreById } = useActions()
	const { year, genre, category, country, type_content, sort } = useSearch()
	const { query } = useRouter()
	const genreId = (query.id && String(query.id)) || ''
	const { isLoading, movies, genreId: stateGenreId, title, sortAvailable, totalPages } = useGenreById()

	const [page, setPage] = useState(1)
	const [sortId, setSortId] = useState<'1' | '2' | '3' | '4' | '5'>('1')
	const [yearSortId, setYearSortId] = useState('1')
	// const [genreSortId, setGenreSortId] = useState([])
	const [countrySortId, setCountrySortId] = useState('')
	//const [typeSortId, setTypeSortId] = useState('-1')
	const [titleGenre, setTitleGenre] = useState('')
	const showMore = () => {
		setPage(page + 1)
	}


	useEffect(() => {
		getSearchParameters()
	}, [])

	useEffect(() => {
		setTitleGenre(
			[...GENRES_ALT, ...genre].find((item) => item.id.toString() == genreId)
				?.name || '',
		)
	}, [genreId, genre])

	useEffect(() => {
		setPage(1)
	}, [genreId, sortId, category])

	useEffect(() => {
		if (typeof yearSortId === 'string') {
			getGenreById({
				genreId,
				params: {
					page: page.toString(),
					id_sort: sortId,
					year: yearSortId,
					country_list: countrySortId,
					//	genre_list:genreId
				},
			})
		}
	}, [genreId, page, sortId, yearSortId, countrySortId, category])

	return (
		<Meta
			title={titleGenre || 'PORTAL'}
			description='Фильмы на любой вкус, мультфильмы, популярные сериалы, новинки от ведущих мировых киностудий'
			image={'https://idc.md/storage/app/media/images/banners/portal/main.png'}
		>
			<div className={'px-5'}>
				<div className={'flex justify-between lg:flex-row flex-col'}>
					{titleGenre ? (
						<div className={'flex justify-between items-center lg:pr-5 pr-2'}>
							<Heading
								title={titleGenre}
								className='lg:px-5  lg:mb-3 lg:pt-5 px-5 pt-2 mb-1'
							/>
						</div>
					) : (
						<div className='p-5 pb-0'>
							<SkeletonLoader className='h-12' />
						</div>
					)}

					<div className={'flex gap-2 items-end lg:flex-row flex-col'}>
						{/*<SortBy sortId={countrySortId} onChange={setCountrySortId} options={country} title={'страна'}/>*/}
						{/*<SortBy sortId={typeSortId} onChange={setTypeSortId} options={type_content} />*/}
						{/*<SortBy sortId={genreSortId} onChange={setGenreSortId} options={genre} title={'жанр'} isMulti={true} />*/}
						{/*<SortBy sortId={genreSortId} onChange={setGenreSortId} options={category} />*/}
						{/*<SortBy sortId={yearSortId} onChange={setYearSortId} options={year} title={'год'} />*/}
						<SortBy
							sortId={sortId}
							onChange={setSortId}
							options={sort}
							title={'сортировать по'}
						/>
					</div>
				</div>

				{!isLoading || (movies && movies.length) ? (
					movies && <Gallery movies={movies} />
				) : (
					<CatalogLoader />
				)}

				{!isLoading ? (
					<div className={'flex justify-center'}>
						{totalPages > page && (
							<button className={'flex border border-primary gap-4 pl-8 py-2 rounded-lg pr-5 items-center'} onClick={showMore}> Показать еще <MdKeyboardArrowDown className={'h-6 w-6'}/>   </button>
						)}
					</div>
				) : (
					<CatalogLoader />
				)}
			</div>
		</Meta>
	)
}

export default Catalog
