import { FC } from 'react'


import styles from '../AdminTable.module.scss'



import { toast } from 'react-hot-toast'

import AdminTableHeader from '../AdminTableHeader'
import SkeletonLoader from '../../SkeletonLoader'
import AdminTableMovieRow from './AdminTableMovieRow'
import { IAdminFileListData } from '@/shared/types/admin.types'

interface IAdminMovieTable {
	tableItems: IAdminFileListData[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

const AdminMovieTable: FC<IAdminMovieTable> = ({
	tableItems,
	isLoading,
	headerItems,
	removeHandler,
}) => {
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
						<AdminTableMovieRow
							tableItem={item}
							removeHandler={() => remove(String(item.id))}
							key={item.id}
						/>
				  ))
				: 'Элементы не найдены'}
		</table>
	)
}

export default AdminMovieTable
