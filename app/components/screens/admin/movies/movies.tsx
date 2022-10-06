import { FC } from 'react'
import AdminTable from '../../../ui/AdminTable/AdminTable'
import AdminHeader from '../../../ui/AdminHeader/AdminHeader'
import { useMovies } from './useMovie'

const Movies: FC = () =>{
const {
	createAsync,
	data,
	isLoading,
	deleteAsync,
	searchTerm,
	handleSearch,
} = useMovies()

	const movies = data
	return (
		<div>
			<AdminHeader 				handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync}/>
			<AdminTable
				tableItems={movies}
				headerItems={['id','название','год выпуска','дата добавления', 'жанры']}
				removeHandler={deleteAsync}
				isLoading={isLoading}/>
		</div>
	)
}

export default Movies