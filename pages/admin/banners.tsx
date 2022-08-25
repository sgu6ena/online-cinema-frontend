import { NextPage } from 'next'

import Admin from '../../app/components/screens/admin/admin'
import Banners from '../../app/components/screens/admin/banners/banners'

const BannersPage: NextPage = () => {
	return (
		<Admin>
			<Banners />
		</Admin>
	)
}

export default BannersPage
