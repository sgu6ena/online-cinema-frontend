import { FC } from 'react'
import { useUsers } from './useUsers'
import AdminTable from '../../../ui/AdminTable/AdminTable'

const Users: FC = () => {

	// @ts-ignore
	const { data: { data: { data } }, isLoading } = useUsers()

	const userTable = data.map((user: any, index: number) => ({
		_id: user.id,
		editUrl: user.id,
		items: [
			index + 1,
			user.id,
			user.login,
			user.email,
			user.subscribe ? 'оформлена' : 'не оформлена',
			user.paid ? 'оплачено' : 'не оплачено',
			user.sub_end,
			user.date_flow
		],
	}))

	console.log(userTable)
	return <div>

		<AdminTable isLoading={isLoading} tableItems={userTable}
								headerItems={['N', 'id', 'логин', 'почта', 'подписка', 'оплата', 'ДАТА ОКОНЧАНИЯ ПОДПИСКИ', 'ДАТА ОТКАЗА']}
								removeHandler={() => {
								}} />

	</div>
}

export default Users
