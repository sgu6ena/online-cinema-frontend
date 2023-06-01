import { FC } from 'react'

import { IAdminGenreListData } from '@/shared/types/admin.types'

import AdminActions from '../AdminActions/AdminActions'

const AdminTableGenreRow: FC<{ item:IAdminGenreListData, removeHandler: (id: string) => void }> = ({ item:genre, removeHandler}) => {
	return (
		<tr>
			<td><img src={`//portal.idc.md/img/mov-selec/${genre.id}.jpg`} alt={genre.name} />{genre.name}</td>
			<td>{genre.sort}</td>


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
