import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './Galery.module.scss'
import GalleryItem from './GalleryItem'
import { IGalleryItem } from './gallery.interface'

const GallerySlider: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<Swiper
			className={styles.gallery}
			slidesPerView={'auto'}
			centeredSlides={false}
			spaceBetween={20}
		>
			{items.map((item: IGalleryItem, index) => (
				<SwiperSlide
					key={item.link + Math.random() * index}
					className={styles.slide}
				>
					<GalleryItem item={item} variant="vertical" />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default GallerySlider
