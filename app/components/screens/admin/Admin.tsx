import { FC } from 'react'
import Heading from '../../ui/heading/Heading'
import AdminNavigation from '../../ui/admin-navigation/AdminNavigation'

const Admin:FC = () => {
	return (
		<div className={''}>
			<Heading title={'Админка'} className={'text-center my-10'}/>
			<AdminNavigation />
			<div className={'p-layout text-center'}>
					тут какая-то статистика, если нужна
			</div>
		</div>
	)
}

export default Admin