import { FC, useEffect } from 'react'

import AdminHeader from '../../../ui/AdminHeader/AdminHeader'
import { useMovies } from './useMovie'
import AdminMovieTable from '../../../ui/AdminTable/AdminTableMovie/AdminMovieTable'
import Pagination from '../../../ui/pagination/pagination'
import { useRouter } from 'next/router'

const Movies: FC = () => {
	const { query } = useRouter()
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useMovies()
	const movies = data?.data ? data.data : []
	useEffect(() => {
		query.page = '1'
	}, [searchTerm])

	return (
		<div>
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync} />
			<AdminMovieTable
				tableItems={movies}
				headerItems={['Название', 'Год', 'Просмотров', 'Рейтинг КП', 'Голосов КП', 'Дата заливки', 'Дата редактирования', 'Скрытый?', 'Тип контента']}
				removeHandler={deleteAsync}
				isLoading={isLoading} />
			{data?.pagination ? <Pagination pagination={data.pagination} /> : ''}
		</div>
	)
}

export default Movies