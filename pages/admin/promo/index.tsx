import { NextPage } from 'next'
import Admin from '@/screens/admin/admin'
import Promos from '@/screens/admin/promo/promos'

const PromoPage: NextPage = () => {
	return (
		<Admin>
			<Promos />
		</Admin>
	)
}

export default PromoPage