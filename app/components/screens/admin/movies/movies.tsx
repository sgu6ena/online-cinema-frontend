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
				headerItems={['НАЗВАНИЕ', 'ГОД', 'ПРОСМОТРОВ', 'РЕЙТИНГ КП', 'ГОЛОСОВ КП', 'ДАТА ЗАЛИВКИ', 'ДАТА РЕДАКТИРОВАНИЯ', 'СКРЫТЫЙ', 'ТИП КОНТЕНТА']}
				removeHandler={deleteAsync}
				isLoading={isLoading} />
		</div>
	)
}

export default Movies