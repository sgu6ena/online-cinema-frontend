import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Galery.module.scss'
import { IGalleryItemProps } from './gallery.interface'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link href={item.link}>
			<a
				className={cn(styles.item, {
					[styles.withText]: item.content,
					[styles.horizontal]: variant === 'horizontal',
					[styles.vertical]: variant === 'vertical',
				})}
			>
				<Image
					src={
						item.posterPath ||
						'http://istprof.ru/static/istprof/1450/no_poster.jpg'
					}
					alt={item.name}
					layout="fill"
					draggable={false}
					priority
					unoptimized
				/>
				{item.content && (
					<div className={styles.content}>
						<div className={styles.title}>{item.content.title}</div>
							<div className={styles.subTitle}>
								{item.age&&<span className={'px-1 hidden lg:block mx-1 text-xs rounded border'}>{item.age}</span>}
								{item.year&&<span className={'px-1 mx-1 hidden lg:block text-xs rounded border'}>{item.year}</span>}
								{item.access === 1 ? <span className={'text-primary text-center'}> подписка </span> : ' бесплатно '}
							</div>
					</div>
				)}


			</a>
		</Link>
	)
}

export default GalleryItem
