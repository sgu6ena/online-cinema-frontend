import React, { FC, useState } from 'react'
import { useMovieToggles } from '@/screens/admin/movies/useMovieToggles'

interface IVisibleToggle {
	movieId: string
	isVisible: boolean
}

const VisibleToggleButton: FC<IVisibleToggle> = ({ isVisible, movieId }) => {
	const [isActive, setIsActive] = useState(isVisible)
	const { setIsVisibleAsync, isLoadingVisible } = useMovieToggles({ id: movieId })
	const onClick = () => {
		setIsActive(!isActive)
		setIsVisibleAsync(isActive)
	}

	return (
		<button onClick={onClick}
						className={isLoadingVisible ? 'bg-gray-500 p-3 w-24' : isActive ? 'bg-primary font-bold bg-opacity-50 p-3 w-24' : 'bg-green-950 font-bold bg-opacity-30 p-3 w-24'}
						disabled={isLoadingVisible}>
			{isLoadingVisible ? '. . .' : isActive ? 'Скрыто' : 'Доступно'}
		</button>
	)
}

export default VisibleToggleButton