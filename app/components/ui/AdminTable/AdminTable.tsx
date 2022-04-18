import { FC } from 'react'
import { toastr } from 'react-redux-toastr'

import SkeletonLoader from '../SkeletonLoader'

import styles from './AdminTable.module.scss'
import AdminTableHeader from './AdminTableHeader'
import AdminTableRow from './AdminTableRow'
import { ITableItem } from './admin-table.interface'

interface IAdminTable {
	tableItems: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

const AdminTable: FC<IAdminTable> = ({
	tableItems,
	isLoading,
	headerItems,
	removeHandler,
}) => {
	const remove = (id: string) => {
		confirm('Вы уверены?')
			? removeHandler(id)
			: toastr.error('Удаление элемента', 'отменено')
	}

	return (
		<table className={styles.table}>
			<AdminTableHeader headerItems={headerItems || []} />
			{isLoading && <SkeletonLoader count={1} height={48} className="mt-4" />}
			{tableItems
				? tableItems.map((item) => (
						<AdminTableRow
							tableItem={item}
							removeHandler={() => remove(item._id)}
							key={item._id}
						/>
				  ))
				: 'Элементы не найдены'}
		</table>
	)
}

export default AdminTable
