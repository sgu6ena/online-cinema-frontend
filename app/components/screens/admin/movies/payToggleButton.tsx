import React, { FC, useState } from 'react'
import { useMovieToggles } from '@/screens/admin/movies/useMovieToggles'

interface IPayToggle {
	movieId: string
	isPayed: boolean
}

const PayToggleButton: FC<IPayToggle> = ({ isPayed, movieId }) => {
	const [isActive, setIsActive] = useState(isPayed)
	const { setIsPayedAsync, isLoading } = useMovieToggles({ id: movieId })
	const onClick = () => {
		setIsActive(!isActive)
		setIsPayedAsync(isActive)
	}

	return (
		<button onClick={onClick}
						className={isLoading ? 'bg-gray-500 p-3 w-64' : isActive ? 'bg-primary p-3 w-64 font-bold bg-opacity-50' : 'bg-green-950 font-bold bg-opacity-30 p-3 w-64'}
						disabled={isLoading}>
			{isLoading ? '. . .' : isActive ? 'Подписка' : 'Бесплатно'}
		</button>
	)
}

export default PayToggleButton