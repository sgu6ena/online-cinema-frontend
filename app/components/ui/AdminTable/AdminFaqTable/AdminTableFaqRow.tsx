import { FC } from 'react'

import { IAdminGenreListData } from '@/shared/types/admin.types'

import AdminActions from '../AdminActions/AdminActions'
import Link from 'next/link'

const AdminTableFaqRow: FC<{ item: {title:string, text:string, id:string}, removeHandler: (id: string) => void }> = ({ item:faq, removeHandler}) => {
	return (
		<tr>
			<td>
				<Link href={`faq/${String(faq.id)}`}>
					<a className={'flex gap-4 items-center'}>{faq.title}</a>
				</Link>
			</td>
			<Link href={`faq/${String(faq.id)}`}>
			<td>{faq.text}</td>
			</Link>

			<td>{faq.id}</td>
			<td>
				<AdminActions
					editUrl={`faq/${String(faq.id)}`}
					removeHandler={() => removeHandler(String(faq.id))}
				/>
			</td>
		</tr>
	)
}

export default AdminTableFaqRow
