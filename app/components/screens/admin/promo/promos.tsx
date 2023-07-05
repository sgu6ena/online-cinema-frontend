import React, { useEffect, useState } from 'react'
import Button from '@/ui/form-elemets/Button'
import { usePromos } from '@/screens/admin/promo/usePromo'
import AdminHeader from '@/ui/AdminHeader/AdminHeader'
import { useRouter } from 'next/router'
import AdminTableHeader from '@/ui/AdminTable/AdminTableHeader'
import styles from '@/ui/AdminTable/AdminTable.module.scss'

export interface IPromoTable {
	admin:string
	type_id: null|number
	time_expired:string
	status:string
	user_id:number
	time_active:string
	created_at:string
}

const Promos = () => {
  const {data, isLoading, } = 	usePromos()
	const [promos, setPromos] = useState(data||[])
	const { push } = useRouter()
	useEffect(()=>{
		setPromos(data?.reverse()||[])
	},[data])
	const headerItems = ['кто генерировал', 'длительность в месяцах', 'время окончания', 'статус', 'кто вводил (id абонента)', ' дата активации', 'created_at']

	return (
		<div >
			<Button onClick={()=>push('/admin/promo/new')}>Добавить промокоды</Button>

			{isLoading?<p>...</p>:

			<table className={styles.table}>
			<AdminTableHeader   headerItems={headerItems}/>
				{promos?.map((item, index)=><tr key={index}>
					<td>{item.admin}</td>
					<td>{item.type_id}</td>
					<td>{item.time_expired}</td>
					<td>{item.status}</td>
					<td>{item.user_id}</td>
					<td>{item.time_active}</td>
					<td>{new Date(item.created_at).toLocaleDateString() + ' ' + new Date(item.created_at).toLocaleTimeString()}</td>
					<td></td>
				</tr>)}
			</table>
		}


		</div>
	)
}

export default Promos