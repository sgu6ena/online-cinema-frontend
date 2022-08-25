import { NextPage } from 'next'

import Admin from '../../app/components/screens/admin/admin'
import Users from '../../app/components/screens/admin/users/users'

const UsersPage: NextPage = () => {
	return (
		<Admin>
			<Users />
		</Admin>
	)
}

export default UsersPage
