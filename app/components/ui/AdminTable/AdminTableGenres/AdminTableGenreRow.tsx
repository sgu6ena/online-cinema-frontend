import { FC } from 'react'

import { IAdminGenreListData } from '@/shared/types/admin.types'

import AdminActions from '../AdminActions/AdminActions'

const AdminTableGenreRow: FC<{ item:IAdminGenreListData, removeHandler: (id: string) => void }> = ({ item:genre, removeHandler}) => {
	return (
		<tr>
			<td>{genre.sort}</td>
			<td>{genre.name}</td>
			<td>{genre.id}</td>
			<td>
				<AdminActions
					editUrl={`genres/${String(genre.id)}`}
					removeHandler={() => removeHandler(String(genre.id))}
				/>
			</td>
		</tr>
	)
}

export default AdminTableGenreRow
