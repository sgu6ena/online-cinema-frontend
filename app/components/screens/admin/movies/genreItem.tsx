import { FC } from 'react'
import { IGenrePortal } from '@/shared/types/movie.types'
import genreItem from '@/ui/genres/GenreItem'

const GenreItem:FC<{ genre: IGenrePortal, isActive:boolean }> = ({ genre, isActive }) => {
	return (
		<label key={genre.cid} className={'flex w-60 gap-2 items-center'}>
			<input type='checkbox' checked={isActive} /> <span>{genre.title}</span>
		</label>
	)
}

export default GenreItem