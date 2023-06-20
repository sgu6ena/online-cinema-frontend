import { FC, useEffect, useState } from 'react'
import { useGenres } from './useGenres'
import AdminGenresTable from '@/ui/AdminTable/AdminTableGenres/AdminGenresTable'
import AdminHeader from '@/ui/AdminHeader/AdminHeader'
import { useRouter } from 'next/router'
import { iAdminGenre } from '../../../../api/admin/admin.service'

const Genres: FC = () => {
	const { genres, isLoading } = useGenres()
	const { push } = useRouter()
	const [sortGenres, setSortGenres] = useState<iAdminGenre[]>([])
	const [term, setTerm] = useState('')

	useEffect(() => {
		setSortGenres(genres
			.filter(genre => genre.name.toLowerCase().includes(term.toLowerCase().trim()))
			.sort((a: { sort: number }, b: { sort: number }) => Number(b.sort) - Number(a.sort)))
	}, [term, genres])

	return (
		<div>
			<AdminHeader searchTerm={term} handleSearch={(e) => setTerm(e.target.value)}
									 onClick={() => push('genres/new')} />
			{isLoading && <h1>загрузка</h1>}
			<AdminGenresTable tableItems={sortGenres} removeHandler={(e) => console.log(e)}
												headerItems={['сортировка', 'название', 'ID']} isLoading={isLoading} />
		</div>
	)
}

export default Genres