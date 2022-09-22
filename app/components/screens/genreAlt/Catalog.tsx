import { FC, useEffect, useState } from 'react'
import {  useGenreById } from '../../../hooks/useGenre'
import { useActions } from '../../../hooks/useActions'
import { useRouter } from 'next/router'
import { getGenreById } from '../../../store/genre/genre.actions'
import Meta from '../../../utils/meta/Meta'
import Heading from '../../ui/heading/Heading'
import SkeletonLoader from '../../ui/SkeletonLoader'
import Gallery from '../../ui/gallery/Gallery'
import CatalogLoader from '../../loaders/CatalogLoader'
import Button from '../../ui/form-elemets/Button'

const Catalog: FC = () => {
	const {	getGenreById	} = useActions()
	const titleGenre = 'ЖАНРРРр'

	const { query } = useRouter()
	const genreId = query.id && String(query.id)||''
	const {isLoading, movies} = useGenreById()
	console.log( {isLoading, movies, genreId})

	const [page, setPage] = useState(0)
	useEffect(()=>{
		getGenreById({ genreId, page:page.toString() })
	},[genreId, page])
	return (
		<Meta title={titleGenre}>
			<div className={'px-5'}>
				{titleGenre ? (
					<Heading
						title={titleGenre}
						className="lg:px-5  lg:mb-3 lg:pt-5 px-5 pt-2 mb-1"
					/>
				) : (
					<div className="p-5 pb-0">
						<SkeletonLoader className="h-12" />
					</div>
				)}
				{!isLoading || movies.length ? (
					<>
						{movies && <Gallery movies={movies} />}
						{<Button onClick={()=>setPage(page+1)}> Показать еще</Button>}
						{/*{pagination && pagination.totalPages > 1 && (*/}
						{/*	<Pagination pagination={pagination} />*/}
						{/*)}*/}
					</>
				) : (
					<CatalogLoader />
				)}
			</div>
		</Meta>
	)
}

export default Catalog