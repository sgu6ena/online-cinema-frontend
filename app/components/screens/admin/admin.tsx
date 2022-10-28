import { FC } from 'react'

import AdminNavigation from '../../ui/admin-navigation/AdminNavigation'
import Heading from '../../ui/heading/Heading'
import { isAdminSelector } from '../../../hooks/useAuth'

const Admin: FC = ({ children }) => {
	const isAdmin = isAdminSelector()
	return (
		<div className={'py-layout'}>
			{isAdmin ? <>  <Heading title={'Админка'} className={'text-center pb-16'} />
				<AdminNavigation />
				<div className={'px-layout'}>{children}</div>
			</> : <Heading title={'404'} className={'text-center pb-16'} />}

		</div>
	)
}

export default Admin
