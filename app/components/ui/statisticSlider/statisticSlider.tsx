import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './statisticCollectiom.module.scss'

import { IMoviePortal } from '@/shared/types/movie.types'
import StatisticItem from './statisticItem'
const StatisticSlider:FC<{ items: IMoviePortal[] }> = ({ items })  => {
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
					<StatisticItem item={item} index={index+1}/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default StatisticSlider


