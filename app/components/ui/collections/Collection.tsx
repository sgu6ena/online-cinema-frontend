import Link from 'next/link'
import React, { FC } from 'react'

import { getGenreUrl } from '@/config/url.config'

import MaterialIcon from '../MaterialIcon'
import GallerySlider from '../gallery/GalerySlider'
import { IGalleryHome } from '../gallery/gallery.interface'
import Heading from '../heading/Heading'

import styles from './collection.module.scss'
import { collectionsToItems } from '@/screens/home/Home'
import Button from '@/ui/form-elemets/Button'

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
					<div>
						<Link href={getGenreUrl(collection.cid.toString())}>
							<a>
								<Button>
									<span> Смотреть все</span>
									<MaterialIcon name='MdChevronRight' />
								</Button>
							</a>
						</Link>
					</div>

				</div>
				<GallerySlider
					items={collectionsToItems(collection.items.filter((i) => i.id))}
				/>
			</div>
		</div>
	)
}

export default Collection
