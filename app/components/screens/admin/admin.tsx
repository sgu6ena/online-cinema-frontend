import { FC } from 'react'

import AdminNavigation from '../../ui/admin-navigation/AdminNavigation'
import Heading from '../../ui/heading/Heading'

const Admin: FC = ({ children }) => {
	return (
		<div className={'py-layout'}>
			<Heading title={'Админка'} className={'text-center pb-16'} />
			<AdminNavigation />
			<div className={'px-layout'}>{children}</div>
		</div>
	)
}

export default Admin
