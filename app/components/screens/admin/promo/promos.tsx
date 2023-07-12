import React, { useEffect, useState } from 'react'
import Button from '@/ui/form-elemets/Button'
import { usePromos } from '@/screens/admin/promo/usePromo'
import AdminHeader from '@/ui/AdminHeader/AdminHeader'
import { useRouter } from 'next/router'
import AdminTableHeader from '@/ui/AdminTable/AdminTableHeader'
import styles from '@/ui/AdminTable/AdminTable.module.scss'

export interface IPromoTable {
	code: string
	text1:string
	text3:string
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
	const headerItems = ['кто', 'код','длительность', 'скидка',"статус", 'id абонента', ' дата активации', 'дата/время генерации']

	return (
		<div >
			<Button onClick={()=>push('/admin/promo/new')}>Добавить промокоды</Button>

			{isLoading?<p>...</p>:

			<table className={styles.table}>
			<AdminTableHeader   headerItems={headerItems}/>
				{promos?.map((item, index)=><tr key={index}>

					<td>{item.admin}</td>
					<td>{item.code}</td>
					<td>{item.text1}</td>
					<td >{item.text3}%</td>
					{/*<td className={item.text3==='100'?"bg-green-950 bg-opacity-30":item.text3==='50'?'bg-green-950 bg-opacity-20':'bg-green-950 bg-opacity-10'}>{item.text3}</td>*/}
					{/*<td>{item.type_id}</td>*/}
					{/*<td>{item.time_expired}</td>*/}
					<td className={item.status==='Активирован'?"bg-green-950 bg-opacity-30":'bg-primary bg-opacity-30'}>{item.status}</td>
					<td>{item.user_id}</td>
					<td className={item.time_active==='не активировалось'?"bg-primary bg-opacity-30":'bg-green-950 bg-opacity-30'}>{item.time_active}</td>
					<td>{new Date(item.created_at).toLocaleDateString() + ' ' + new Date(item.created_at).toLocaleTimeString()}</td>
					<td></td>
				</tr>)}
			</table>
		}


		</div>
	)
}

export default Promos