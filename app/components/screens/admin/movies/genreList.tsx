import { FC, useState } from 'react'
import GenreItem from '@/screens/admin/movies/genreItem'
import { useGenres } from '@/screens/genres/useGenres'
import { IGenre, IGenrePortal } from '@/shared/types/movie.types'
import { useMovieGenre } from '@/screens/admin/movies/useMovieGenre'

interface GenreList {
	id: string
	activeGenres: IGenre[]
}

const GenreList: FC<GenreList> = ({ id:movieId, activeGenres }) => {

	const { genres, collections, banner } = useGenres()
	const allGenres = [...genres, ...collections, banner]
	const movieGenres = activeGenres.map(item => item.id)
	const [currentGenres, setCurrentGenres] = useState(movieGenres)
	const {updateAsync,isLoading} = useMovieGenre()
	const handleChange = (id: string) => {
		if (currentGenres.includes(id)) {
			const index = currentGenres.findIndex((genre) => genre === id)
			setCurrentGenres([...currentGenres.slice(0, index), ...currentGenres.slice(index + 1)])
			updateAsync({movieId:movieId, genreId:id, isActive:false})
		} else {
			setCurrentGenres([...currentGenres, id])
			updateAsync({movieId:movieId, genreId:id, isActive:true})
		}
	}
	return (
		<div className={'flex gap-2 flex-wrap'}>

			{allGenres.map((item) => (
				<label key={item.cid} className={'flex w-60 gap-2 items-center'}>{<>
					<input type='checkbox' checked={currentGenres.includes(item.cid)} onChange={() => handleChange(item.cid)} />
					<span>{item.title}</span></>}
				</label>
			))}
		</div>
	)
}

export default GenreList