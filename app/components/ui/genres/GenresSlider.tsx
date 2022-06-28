import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IMainGenres } from '../../../shared/types/movie.types'

import GenreItem from './GenreItem'
import styles from './genres.module.scss'

const GenresSlider: FC<{ genres: IMainGenres }> = ({ genres: { items } }) => {
	return (
		<Swiper


			slidesPerView={'auto'}

			spaceBetween={20}
			className={styles.slider}
		>
			{items.map((item) => (
				<SwiperSlide key={item.id} className={styles.slide}>
					<GenreItem genre={item} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default GenresSlider
