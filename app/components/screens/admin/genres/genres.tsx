import { FC } from 'react'
import { useGenres } from './useGenres'
import AdminGenresTable from '@/ui/AdminTable/AdminTableGenres/AdminGenresTable'
import AdminHeader from '@/ui/AdminHeader/AdminHeader'

const Genres: FC = () => {
	const {genres, isLoading}=useGenres()

	const sortGenres = genres.sort((a: { sort: number }, b: { sort: number })=>Number(b.sort)-Number(a.sort))
	return (
		<div>
			{/*<AdminHeader searchTerm={'жанр'} handleSearch={(e)=>console.log(e.target.value)} onClick={()=>console.log('d')} />*/}
			{/*{ !isLoading && sortGenres.map((genre:any)=><p> {genre.id} {genre.name} {genre.sort}</p> )}*/}
			<AdminGenresTable tableItems={sortGenres} removeHandler={(e)=>console.log(e)} headerItems={['сортировка','название', 'ID']} isLoading={isLoading}/>
		</div>
	)
}

export default Genres