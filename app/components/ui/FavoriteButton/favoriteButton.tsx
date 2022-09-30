import { FC, MouseEvent, useEffect } from 'react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

import { useActions } from '../../../hooks/useActions'
import { useFavoritesById } from '../../../hooks/useFavorites'
import styles from '../gallery/Galery.module.scss'

const FavoriteButton: FC<{ id: string }> = ({ id }) => {
	const { favorites } = useActions()
	const isFavorite = useFavoritesById(id)

	const favoritesHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()
		event.preventDefault()
		id && favorites(id)
	}

	useEffect(() => {
	}, [isFavorite, favoritesHandler])
	return (
		<button className={styles.favorite} onClick={favoritesHandler}>
			{isFavorite ? <BsBookmarkFill /> : <BsBookmark />}
		</button>
	)
}

export default FavoriteButton
