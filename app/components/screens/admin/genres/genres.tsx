import { FC, useEffect, useState } from 'react'
import { useGenres } from './useGenres'
import AdminGenresTable from '@/ui/AdminTable/AdminTableGenres/AdminGenresTable'
import AdminHeader from '@/ui/AdminHeader/AdminHeader'
import { useRouter } from 'next/router'

const Genres: FC = () => {
	const { genres, isLoading } = useGenres()
	const { push } = useRouter()
	const [term, setTerm] = useState('')
	const [sortGenres, setSortGenres] = useState(genres)

	// const sortGenres = genres.sort((a: { sort: number }, b: { sort: number }) => Number(b.sort) - Number(a.sort))


	useEffect(() => {
		setSortGenres(genres.filter(genre => genre.name.match(term)).sort((a: { sort: number }, b: {
			sort: number
		}) => Number(b.sort) - Number(a.sort)))
	}, [term])

	return (
		<div>
			<AdminHeader searchTerm={term} handleSearch={(e) => setTerm(e.target.value)}
									 onClick={() => push('genres/new')} />

			<AdminGenresTable tableItems={sortGenres} removeHandler={(e) => console.log(e)}
												headerItems={['сортировка', 'название', 'ID']} isLoading={isLoading} />
		</div>
	)
}

export default Genres