import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getGenresList } from '../../../utils/movie/getGenresList'

import styles from './Galery.module.scss'
import { IGalleryItemProps } from './gallery.interface'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link href={item.link}>
			<a>
				<div
					className={cn(styles.item, {
						[styles.withText]: item.content,
						[styles.horizontal]: variant === 'horizontal',
						[styles.vertical]: variant === 'vertical',
					})}
				>
					<Image
						src={item.posterPath || './images/posters/no_poster.jpg'}
						alt={item.name}
						layout='fill'
						draggable={false}
						priority
						unoptimized
					/>
					<div className={styles.tags}>
						<div className={cn(styles.tag, item.access&&styles.pay)}> {item.access ? 'Платно' : 'Бесплатно'}</div>
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
					{item.genres && getGenresList(item.genres, ' ·')}
				</h5>
			</a>
		</Link>
	)
}

export default GalleryItem
