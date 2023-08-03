import { FC, useEffect, useState } from 'react'

import AdminHeader from '../../../ui/AdminHeader/AdminHeader'
import { useMovies } from './useMovie'
import AdminMovieTable from '../../../ui/AdminTable/AdminTableMovie/AdminMovieTable'
import Pagination from '../../../ui/pagination/pagination'
import { useRouter } from 'next/router'
import SortBy from '../../../ui/sortMenu/sortBy'

import { useActions } from '@/hooks/useActions'
import { useGenre } from '@/screens/admin/genres/useGenre'
import { useGenres } from '@/screens/admin/genres/useGenres'

const Movies: FC = () => {
	const { query } = useRouter()
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleYear,
		handleCid,
		handleSearch,
		handleHidden,
		genre,
		years,
		cid,
		year,
		hidden,
	} = useMovies()
	const movies = data?.data ? data.data : []
	const { getSearchParameters } = useActions()

	useEffect(() => {
		getSearchParameters()
	}, [])

	useEffect(() => {
		query.page = '1'
	}, [searchTerm, cid, year, hidden])

	return (
		<div>
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync}>
				<label className={'flex  gap-2 items-center'}>
					<input type='checkbox' checked={hidden} onChange={handleHidden} /> <span>показать только скрытые</span>
				</label>
				<SortBy onChange={handleCid}  options={genre} sortId={''} title={'жанр'} />
				<SortBy onChange={handleYear} options={years} sortId={''} title={'год'} />
			</AdminHeader>
			<AdminMovieTable
				tableItems={movies}
				headerItems={['Название',  'Возраст', 'Страны', 'Жанры','Год', 'Просмотров', 'Рейтинг КП', 'Голосов КП', 'Дата заливки', 'Дата редакт.', 'Скрытый?', 'Тип контента']}
				removeHandler={deleteAsync}
				isLoading={isLoading} />
			{data?.pagination ? <Pagination pagination={data.pagination} /> : ''}
		</div>
	)
}

export default Movies