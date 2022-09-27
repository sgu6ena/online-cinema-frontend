import Link from 'next/link'
import React, { FC } from 'react'

import { getGenreUrl } from '../../../config/url.config'

import MaterialIcon from '../MaterialIcon'
import GallerySlider from '../gallery/GalerySlider'
import { IGalleryHome } from '../gallery/gallery.interface'
import Heading from '../heading/Heading'

import styles from './collection.module.scss'

const Collection: FC<{ collection: IGalleryHome }> = ({ collection }) => {
	return (
		<div>
			<div className={styles.collectionsWrapper} key={collection.title}>
				<div className={styles.collection}>
					<Link href={getGenreUrl(collection.cid.toString())}>
						<a>
							<Heading title={collection.title} />
						</a>
					</Link>
					<Link href={getGenreUrl(collection.cid.toString())}>
						<a>
							<button>
								<span> Смотреть все</span>
								<MaterialIcon name='MdChevronRight' />
							</button>
						</a>
					</Link>
				</div>
				<GallerySlider
					items={collection.items.filter((i) => i.id)}
				/>
			</div>
		</div>
	)
}

export default Collection
