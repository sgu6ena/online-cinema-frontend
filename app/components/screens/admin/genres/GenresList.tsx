import { FC } from 'react'

import Meta from '../../../../utils/meta/Meta'
import AdminHeader from '../../../ui/AdminHeader/AdminHeader'
import AdminTable from '../../../ui/AdminTable/AdminTable'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import Heading from '../../../ui/heading/Heading'

import { useGenres } from './useGenres'

const GenresList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useGenres()
	return (
		<Meta title="Жанры">
			<AdminNavigation />
			<Heading title={'Жанры'} />
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />

			<AdminTable
				headerItems={['Название', 'Количество фильмов']}
				tableItems={data || []}
				removeHandler={deleteAsync}
				isLoading={isLoading}
			/>
		</Meta>
	)
}

export default GenresList
