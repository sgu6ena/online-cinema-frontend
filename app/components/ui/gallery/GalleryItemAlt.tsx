import cn from 'classnames'
import Link from 'next/link'
import  { FC, MouseEvent } from 'react'

import { getGenresList } from '../../../utils/movie/getGenresList'

import styles from './Galery.module.scss'
import { IMoviePortal } from '../../../shared/types/movie.types'
import { getMoviesUrl } from '../../../config/api.config'
import { getCountryList } from '../../../utils/movie/getCountryList'

import { useActions } from '../../../hooks/useActions'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import Rating, { IRating } from '../rating/Rating'
import { useFavorites } from '../../../hooks/useFavorites'

const GalleryItemAlt: FC<{ movie: IMoviePortal }> = ({ movie }) => {
	const { favorites } = useActions()
	const { favoritesId } = useFavorites()
	const isFavorited = favoritesId.find(item => item == movie.id)
	const favoritesHandler = (event:MouseEvent<HTMLButtonElement>) => {
			event.stopPropagation()
			event.preventDefault()
			movie.id && favorites(movie.id)
		}


	return (
		<Link href={getMoviesUrl(movie.id)}>
			<a>
				<div className={cn(styles.itemAlt, styles.vertical)}>
					<img
						src={movie.logo || './images/posters/no_poster.jpg'}
						alt={movie.title}
					/>
					<div className={styles.content}>
						<div className={styles.top}>
							<div>
								{movie.rate_age && <span className={styles.age}>
								{movie.rate_age}
							</span>}
							</div>
							<button className={styles.favorite}
											onClick={favoritesHandler}
							>
								{isFavorited ? <BsBookmarkFill /> : <BsBookmark />}
							</button>
						</div>
						<div className={styles.bottom}>
							<Rating kp={movie.rate_kp} imdb={movie.rate_imdb} />
							<h5 className={styles.h5}>{movie.year}</h5>
							<h5 className={styles.h5}>
								{movie.genre && getGenresList(movie.genre.slice(0, 3), ', ')}
							</h5>
							<h5 className={styles.h5}>
								{getCountryList(movie.country.slice(0, 2))}
							</h5>
						</div>
					</div>
				</div>
				<h4 className={styles.h4}>
					{movie.title}
				</h4>
				<div className={movie.access ? styles.pay : styles.free}>
					{movie.access ? 'Подписка' : 'Бесплатно'}
				</div>
			</a>
		</Link>
	)
}

export default GalleryItemAlt
