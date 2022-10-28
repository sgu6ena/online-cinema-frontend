import { FC } from 'react'
import { useGenres } from './useGenres'

const Genres: FC = () => {
	const {genres, isLoading}=useGenres()

	const sortGenres = genres.sort((a: { sort: number }, b: { sort: number })=>b.sort-a.sort)
	return (
		<div>
			{ !isLoading && genres.map((genre:any)=><p> {genre.id} {genre.name} {genre.sort}</p> )}
		</div>
	)
}

export default Genres