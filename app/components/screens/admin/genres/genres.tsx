import { FC } from 'react'
import { useGenres } from './useGenres'

const Genres: FC = () => {
	const {genres, isLoading}=useGenres()

	const sortGenres = genres.sort((a, b)=>b.sort-a.sort)
	return (
		<div>
			{ !isLoading && genres.map((genre)=><p> {genre.id} {genre.name} {genre.sort}</p> )}
		</div>
	)
}

export default Genres