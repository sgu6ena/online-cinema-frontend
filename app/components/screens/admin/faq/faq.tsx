import { FC, useEffect, useState } from 'react'

import AdminGenresTable from '@/ui/AdminTable/AdminTableGenres/AdminGenresTable'
import AdminHeader from '@/ui/AdminHeader/AdminHeader'
import { useRouter } from 'next/router'
import { iAdminGenre } from '../../../../api/admin/admin.service'
import { useFAQs } from '@/screens/admin/faq/useFAQs'
import AdminFaqsTable from '@/ui/AdminTable/AdminFaqTable/AdminFaqsTable'

const Faqs: FC = () => {
	const { faqs, isLoading } = useFAQs()
	const { push } = useRouter()
	const [term, setTerm] = useState('')

	return (
		<div>
			<AdminHeader searchTerm={term} handleSearch={(e) => setTerm(e.target.value)}
									 onClick={() => push('faq/new')} />
			{isLoading && <h1>загрузка</h1>}
			<AdminFaqsTable tableItems={faqs} removeHandler={(e) => console.log(e)}
												headerItems={['вопрос', 'ответ', 'ID']} isLoading={isLoading} />
		</div>
	)
}

export default Faqs