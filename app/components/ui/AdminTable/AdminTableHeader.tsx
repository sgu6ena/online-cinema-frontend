import { FC } from 'react'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<thead>
			<tr>
				{headerItems.map((value, idx: number) => (
					<th key={idx}>{value}</th>
				))}
				<th>Действия</th>
			</tr>
		</thead>
	)
}

export default AdminTableHeader
