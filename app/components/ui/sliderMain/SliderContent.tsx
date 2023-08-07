import cn from 'classnames'
import Link from 'next/link'
import React, { FC } from 'react'

import MaterialIcon from '../MaterialIcon'
import { ISlide } from '../slider/slider.interface'

import styles from './slider.module.scss'
import { getGenreUrl } from '@/config/url.config'
import FavoriteButton from '../FavoriteButton/favoriteButton'
import { gradient } from '@/config/constants'

const SliderContent: FC<{ slideData: ISlide }> = ({ slideData: i }) => {
	return (
		<div className={cn(styles.slide, !i.id ? '' : styles.gradient)}>
			{!i.id ?
				<Link href={i.url as string}>
					<a>
					<img
						data-src={i.bigPoster + ''}
						src={i.bigPoster + ''}
						alt={i.title}
						className={cn(styles.img, '')}
						width={1300}
						height={600}
					/>
				</a>
				</Link> :
				<img
					data-src={i.bigPoster + ''}
					src={i.bigPoster + ''}
					alt={i.title}
					className={cn(styles.img, '')}
					width={1300}
					height={600}
				/>
			}


			{!i.id ? <></> :
			<div className={styles.content}>
				<Link href={i.link}>
					<a><h3 className={cn(styles.title)}>
						{i.title.toUpperCase()}
					</h3></a>
				</Link>

				<div className={styles.genres}>
					<div>{i.year}</div>
					{i.genres && i.genres.map((genre) => (
						<>
							<span>·</span>
							<Link href={getGenreUrl(genre.id)}>
								<a>{genre.name}</a>
							</Link>
						</>
					))}

					{i.rate_age && <>
						<div>·</div>
						<div>{i.rate_age}</div>
					</>}
				</div>
				<div className={styles.buttons}>
					<Link href={i.link}>
						<a>
							<div className={styles.show}>
								<MaterialIcon name={'MdOutlinePlayArrow'} />
								<div>Смотреть</div>
							</div>
						</a>
					</Link>
					<div className={styles.favorites}><FavoriteButton id={i.id} /></div>

				</div>

			</div>
			}
		</div>
	)
}

export default SliderContent
