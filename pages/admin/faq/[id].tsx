import { NextPage } from 'next'

import React from 'react'
import Admin from '@/screens/admin/admin'
import FaqEdit from '@/screens/admin/faq/edit'

const FaqEditPage: NextPage = () => {

	return 	<Admin >
		<FaqEdit />
	</Admin>
}

export default FaqEditPage
