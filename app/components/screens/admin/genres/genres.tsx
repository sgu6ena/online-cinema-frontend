import { FC } from 'react'
import { useGenres } from './useGenres'
import AdminTable from '@/ui/AdminTable/AdminTable'
import AdminGenresTable from '@/ui/AdminTable/AdminTableGenres/AdminGenresTable'

const Genres: FC = () => {
	const {genres, isLoading}=useGenres()

	const sortGenres = genres.sort((a: { sort: number }, b: { sort: number })=>Number(b.sort)-Number(a.sort))
	return (
		<div>
			{/*{ !isLoading && sortGenres.map((genre:any)=><p> {genre.id} {genre.name} {genre.sort}</p> )}*/}
			<AdminGenresTable tableItems={sortGenres} removeHandler={(e)=>console.log(e)} headerItems={['d']} isLoading={isLoading}/>
		</div>
	)
}

export default Genres