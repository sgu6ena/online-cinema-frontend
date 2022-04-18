import { FC } from 'react'

import Meta from '../../../../utils/meta/Meta'
import AdminHeader from '../../../ui/AdminHeader/AdminHeader'
import AdminTable from '../../../ui/AdminTable/AdminTable'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import Heading from '../../../ui/heading/Heading'

import { useMovies } from './useMovies'

const MoviesList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useMovies()
	return (
		<Meta title="Фильмы">
			<AdminNavigation />
			<Heading title={'Фильмы'} />
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />

			<AdminTable
				headerItems={['Название', 'Рейтинг', 'Количество запусков']}
				tableItems={data || []}
				removeHandler={deleteAsync}
				isLoading={isLoading}
			/>
		</Meta>
	)
}

export default MoviesList
