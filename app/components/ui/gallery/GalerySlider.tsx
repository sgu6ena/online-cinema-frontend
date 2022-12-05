import { FC } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IMoviePortal } from '@/shared/types/movie.types'

import styles from './Galery.module.scss'
import GalleryItemAlt from './GalleryItemAlt'

const GallerySlider: FC<{ items: IMoviePortal[] }> = ({ items }) => {
	return (
		<Swiper
			modules={[Navigation]}
			className={styles.gallery}
			slidesPerView={'auto'}
			centeredSlides={false}
			spaceBetween={20}
			navigation
		>
			{items.map((item: IMoviePortal, index) => (
				<SwiperSlide
					key={item.url + Math.random() * index + item.logo}
					className={styles.slide}
				>
					<GalleryItemAlt movie={item} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default GallerySlider
