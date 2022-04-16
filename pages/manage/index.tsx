import Admin from '../../app/components/screens/admin/Admin'
import Heading from '../../app/components/ui/heading/Heading'
import { NextPageAuth } from '../../app/shared/types/auth.types'

const AdminPage: NextPageAuth = () => {
	return (
		<Admin/>
	)
}

AdminPage.isOnlyAdmin = true

export default AdminPage
