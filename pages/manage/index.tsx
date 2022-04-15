import Heading from '../../app/components/ui/heading/Heading'
import { NextPageAuth } from '../../app/shared/types/auth.types'

const AdminPage: NextPageAuth = () => {
	return (
		<div>
			<Heading title={'AdminPage'} />
		</div>
	)
}

AdminPage.isOnlyAdmin = true

export default AdminPage
