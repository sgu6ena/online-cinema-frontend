import { FC } from 'react'

const AdminTableUsersRow: FC<{ users: any[] }> = ({ users }) => {
	return (
		<tbody>
		{users.map((user, index) => (<tr>
			<td>{index + 1}</td>
			<td>{user.id}</td>
			<td>{user.login}</td>
			<td>{user.email}</td>
			<td className={user.subscribe ? 'bg-green-950  bg-opacity-20' : 'bg-primary  bg-opacity-50'}>
				{user.subscribe ? 'оформлена' : 'не оформлена'}
			</td>
			<td className={user.paid ? 'bg-green-950  bg-opacity-20' : 'bg-primary  bg-opacity-50'}>
				{user.paid ? 'оплачено' : 'не оплачено'}
			</td>
			<td>{user.sub_end}</td>
			<td className={user.date_flow && 'bg-primary  bg-opacity-50'}>{user.date_flow}</td>
			<td></td>
		</tr>))}
		</tbody>
	)
}

export default AdminTableUsersRow