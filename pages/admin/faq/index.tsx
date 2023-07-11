import { NextPage } from 'next'

import Admin from '@/screens/admin/admin'
import Faqs from '@/screens/admin/faq/faq'

const FaqPage: NextPage = () => {
	return (
		<Admin>
			<Faqs />
		</Admin>
	)
}

export default FaqPage
