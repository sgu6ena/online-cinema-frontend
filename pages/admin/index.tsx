import { NextPage } from 'next'

import Admin from '../../app/components/screens/admin/admin'
import Statistic from '../../app/components/screens/admin/statistic/statistic'

const AdminPage: NextPage = () => {
	return (
		<Admin>
			<Statistic />
		</Admin>
	)
}

export default AdminPage
