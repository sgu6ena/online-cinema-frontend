import { FC } from 'react'

import AdminHeader from '../../../ui/AdminHeader/AdminHeader'
import { useMovies } from './useMovie'
import AdminMovieTable from '../../../ui/AdminTable/AdminTableMovie/AdminMovieTable'

const Movies: FC = () => {
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useMovies()
	const movies = data?.data ? data.data : []


	return (
		<div>
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync} />
			<AdminMovieTable
				tableItems={movies}
				headerItems={['Название', 'Год', 'Просмотров', 'Рейтинг КП', 'Голосов КП', 'Дата заливки', 'Дата редактирования', 'Скрытый?', 'Тип контента']}
				removeHandler={deleteAsync}
				isLoading={isLoading} />
		</div>
	)
}

export default Movies