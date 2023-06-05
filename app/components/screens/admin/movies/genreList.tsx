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
	const { updateAsync, isLoading } = useMovieGenre()
	const [currentId, setCurrentId] = useState<string>('')

	const handleChange = async (id: string) => {
		setCurrentId(id)
		if (currentGenres.includes(id)) {
			const index = currentGenres.findIndex((genre) => genre === id)
			setCurrentGenres([...currentGenres.slice(0, index), ...currentGenres.slice(index + 1)])
			await updateAsync({ movieId: movieId, genreId: id, isActive: false })
		} else {
			setCurrentGenres([...currentGenres, id])
			await updateAsync({ movieId: movieId, genreId: id, isActive: true })
		}
	}


	return (
		<>
			<div className={'flex gap-2 my-3 flex-wrap'}>
				{[banner].map((item) => (
					<GenreItem key={item.cid} genre={item} isActive={currentGenres.includes(item.cid)} handleChange={handleChange}
										 isLoading={currentId === item.cid && isLoading} />
				))}
			</div>
			<hr className={'text-gray-500 my-3'} />
			<div className={'flex gap-2   flex-wrap'}>
				{genres.map((item) => (
					<GenreItem key={item.cid} genre={item} isActive={currentGenres.includes(item.cid)} handleChange={handleChange}
										 isLoading={currentId === item.cid && isLoading} />
				))}
			</div>
			<hr className={'text-gray-500 my-3 '} />
			<div className={'flex gap-2 flex-wrap'}>
				{collections.map((item) => (
					<GenreItem key={item.cid} genre={item} isActive={currentGenres.includes(item.cid)} handleChange={handleChange}
										 isLoading={currentId === item.cid && isLoading} />
				))}
			</div>
		</>
	)
}

export default GenreList