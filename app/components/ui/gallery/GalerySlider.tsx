import { FC } from 'react'

import styles from './Galery.module.scss'
import GalleryItem from './GalleryItem'

import { Swiper, SwiperSlide } from 'swiper/react'

import { IGalleryItem } from './gallery.interface'
import { getGenresList } from '../../../utils/movie/getGenresList'

const GallerySlider: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<Swiper className={styles.gallery}
						slidesPerView={'auto'}
						centeredSlides={false} spaceBetween={20}

		>
			{items.map((item: IGalleryItem, index) => (
				<SwiperSlide key={item.link + Math.random() * index} className={styles.slide}>
					<GalleryItem item={item} variant='vertical' />
					<h4><span>{`${item.year}`}</span>{item.title}</h4>
					<h5>{item.genres && getGenresList(item.genres, '·')}</h5>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default GallerySlider
