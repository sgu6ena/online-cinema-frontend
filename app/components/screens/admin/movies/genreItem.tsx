import { FC, useState } from 'react'
import { IGenrePortal } from '@/shared/types/movie.types'
import genreItem from '@/ui/genres/GenreItem'

const GenreItem: FC<{
	genre: IGenrePortal,
	isActive: boolean,
	handleChange: (id: string) => void,
	isLoading: boolean
}> = ({ genre, isActive, handleChange, isLoading }) => {
	// const [isLoading, setIsLoading] = useState(false)
	const onChange = () => {
		handleChange(genre.cid)
	}
	return (
		<label key={genre.cid} className={'flex w-72 hover:bg-gray-700   px-3 py-1 rounded-3xl gap-2 transition-all items-center'}>{<>
		<input type='checkbox' checked={isActive} onChange={onChange} disabled={isLoading} />
			<span className={isLoading?'text-gray-500':''}>{genre.title}</span></>}
		</label>
	)
}

export default GenreItem