import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './Galery.module.scss'
import GalleryItemAlt from './GalleryItemAlt'
import { IMoviePortal } from '../../../shared/types/movie.types'

const GallerySlider: FC<{ items: IMoviePortal[] }> = ({ items }) => {
	return (
		<Swiper
			className={styles.gallery}
			slidesPerView={'auto'}
			centeredSlides={false}
			spaceBetween={20}
		>
			{items.map((item: IMoviePortal, index) => (
				<SwiperSlide
					key={item.url + Math.random() * index + item.logo}
					className={styles.slide}
				>
					<GalleryItemAlt movie={item}  />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default GallerySlider
