import { FC, useEffect, useState } from 'react'
import { useUsers } from './useUsers'

import styles from '../../../ui/AdminTable/AdminTable.module.scss'
import AdminTableHeader from '../../../ui/AdminTable/AdminTableHeader'
import SkeletonLoader from '../../../ui/SkeletonLoader'

import AdminTableUsersRow from '../../../ui/AdminTable/AdminTableUsersRow'

const Users: FC = () => {

	const [isActive, setActive] = useState(false)
	const { data, isLoading } = useUsers()
	const [users, setUsers] = useState([])
	const [isDescribe, setIsDescribe] = useState(false)
	const [isSortById, setIsSortById]=useState(false)

	useEffect(() => {
		const allUsers = isDescribe ? [...data].sort((a, b) => {
			const a1 = new Date(a.date_flow)
			const b1 = new Date(b.date_flow)
			return a1 > b1 ? -1 : 1
		}) : data
		if (isActive) {
			setUsers(allUsers.filter((user:any) => {
				const dateNow = new Date()
				const dateEnd = new Date(user.sub_end)
				return dateNow < dateEnd
			}))
		} else {
			setUsers(allUsers)
		}
	}, [isActive, data, isDescribe])


	useEffect(()=>{
		const usersSort = isSortById?[...data].sort((a,b)=>Number(b.id)-Number(a.id)):data
		setUsers(usersSort)

	}, [isSortById])

	const headerItems = ['N', 'id', 'логин', 'почта', 'подписка', 'оплата', 'ДАТА ОКОНЧАНИЯ ПОДПИСКИ', 'ДАТА ОТКАЗА']
	return <div>
		<div className={'pl-3 flex  gap-8'}>
			<label className={'flex  gap-2 items-center'}>
				<input type='checkbox' checked={isSortById} onChange={() => {
					setIsSortById(!isSortById)
				}} /> <span>сортировать по ид</span>
			</label>
			<label className={'flex  gap-2 items-center'}>
				<input type='checkbox' checked={isActive} onChange={() => {
					setActive(!isActive)
				}} /> <span>показать только активные подписки</span>
			</label>
			<label  className={'flex  gap-2 items-center'}>
				<input type='checkbox' checked={isDescribe} onChange={() => {
					setIsDescribe(!isDescribe)
				}} /> <span>сортировать по отказникам</span>
			</label>
		</div>


		<table className={styles.table}>
			<AdminTableHeader headerItems={headerItems} />
			<AdminTableUsersRow users={users} />
		</table>
		{isLoading && <SkeletonLoader count={1} height={48} className='mt-4' />}


	</div>
}

export default Users
