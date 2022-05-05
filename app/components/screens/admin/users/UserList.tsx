import { FC } from 'react'

import Meta from '../../../../utils/meta/Meta'
import AdminHeader from '../../../ui/AdminHeader/AdminHeader'
import AdminTable from '../../../ui/AdminTable/AdminTable'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import Heading from '../../../ui/heading/Heading'

import { useUsers } from './useUsers'

const UserListPage: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()
	return (
		<Meta title="Пользователи">
			<AdminNavigation />
			<Heading title={'Пользователи'} />
			<AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />

			<AdminTable
				headerItems={['E-mail', 'Дата регистрации', 'Доступ']}
				tableItems={data || []}
				removeHandler={deleteAsync}
				isLoading={isLoading}
			/>
		</Meta>
	)
}

export default UserListPage