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
					src={item.posterPath}
					alt={item.name}
					layout="fill"
					draggable={false}
					priority
					unoptimized
				/>

				{item.content && (
					<div className={styles.content}>
						<div className={styles.title}>{item.content.title}</div>
						{item.content.subTitle && (
							<div className={styles.subTitle}>{item.content.subTitle}</div>
						)}
					</div>
				)}
			</a>
		</Link>
	)
}

export default GalleryItem
