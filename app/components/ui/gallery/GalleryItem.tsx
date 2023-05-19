import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import { getGenresList } from '@/utils/movie/getGenresList'

import styles from './Galery.module.scss'
import { IGalleryItemProps } from './gallery.interface'
import { getMoviesUrl } from '@/config/api.config'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link href={getMoviesUrl(item.id)}>
			<a>
				<div
					className={cn(styles.item, {
						[styles.horizontal]: variant === 'horizontal',
						[styles.vertical]: variant === 'vertical',
					})}
				>
					<img
						src={item.logo || './images/posters/no_poster.jpg'}
						alt={item.title}
					/>
					<div className={styles.tags}>
						<div className={cn(styles.tag, item.access && styles.pay)}>
							{' '}
							{item.access ? 'Платно' : 'Бесплатно'}
						</div>
						{!!item.rate_kp && (
							<div className={styles.tag}>
								Кинопоиск: {item.rate_kp && Math.trunc(item.rate_kp * 10) / 10}
							</div>
						)}
						{!!item.rate_imdb && (
							<div className={styles.tag}>
								IMDB: {item.rate_imdb && Math.trunc(item.rate_imdb * 10) / 10}
							</div>
						)}
					</div>


				</div>
				<h4 className={styles.h4}>
					<span>{item.year}</span>
					{item.title}
				</h4>
				<h5 className={styles.h5}>
					{item.genre && getGenresList(item.genre, ' ·')}
				</h5>
			</a>
		</Link>
	)
}

export default GalleryItem
