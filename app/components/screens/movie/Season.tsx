import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import { IMedia } from '../../../shared/types/movie.types'
import { getListDot } from '../../../utils/movie/getGenresList'

import styles from './Movie.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

export interface ISeason extends IMedia {
	activeId?: number
	index: number
	fn: (id: number, title: string) => void
	logo: string
}

const Season: FC<ISeason> = ({ isActive = false, items, fn, logo, title, activeId }) => {
	return (
		<div className={styles.season}>
			<div className={cn(!isActive ? 'hidden' : styles.active)}>
				<Swiper className={styles.slider}
								slidesPerView={'auto'}
								centeredSlides={false} spaceBetween={0}>
					{items.map((item) => (
						<SwiperSlide className={cn(styles.slide)} key={item.file}>
							<button
								className={cn(styles.episode, (item.file === activeId) && styles.activeEpisode)}
								onClick={() => {
									return fn(item.file, getListDot([title, item.title]))
								}}
							>
								<div className={styles.imageBox}>
									<Image
										src={logo}
										alt={item.title}
										layout='fill'
										priority
										unoptimized
									/>
									<Image
										src={logo}
										alt={item.title}
										layout='fill'
										priority
										unoptimized
										className={styles.poster}
									/>
								</div>
								{/*{item.isActive && <div className={styles.progress}></div>}*/}
								<span>{item.title}</span>
							</button>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default Season
