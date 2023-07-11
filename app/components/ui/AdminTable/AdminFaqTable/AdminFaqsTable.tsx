import { FC } from 'react'
import { toast } from 'react-hot-toast'


import SkeletonLoader from '../../SkeletonLoader'
import styles from '../AdminTable.module.scss'
import AdminTableHeader from '../AdminTableHeader'

import AdminTableFaqRow from './AdminTableFaqRow'
import { IAdminGenreListData } from '@/shared/types/admin.types'

export interface IAdminFaqsTable {
	tableItems: [{title:string, text:string, id:string}]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

const AdminFaqsTable: FC<IAdminFaqsTable> = ({
	tableItems,
	isLoading,
	headerItems,
	removeHandler,
}) => {

	console.log(tableItems)
	const remove = (id: string) => {
		confirm('Вы уверены?')
			? removeHandler(id)
			: toast.error('Удаление элемента отменено')
	}

	return (
		<table className={styles.table}>
			<AdminTableHeader headerItems={headerItems || []} />
			{isLoading && <SkeletonLoader count={1} height={48} className="mt-4" />}
			{tableItems
				? tableItems.map((item) => (
						<AdminTableFaqRow
							item={item}
							removeHandler={() => remove(String(item.id))}
							key={item.id}
						/>
				  ))
				: 'Элементы не найдены'}
		</table>
	)
}

export default AdminFaqsTable
