import cn from 'classnames'
import { FC, useEffect, useRef } from 'react'

import { IMedia } from '@/shared/types/movie.types'
import { getListDot } from '@/utils/movie/getGenresList'

import styles from './Movie.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import ProgressBar from '@/ui/progressBar/progressBar'
import { chunk } from 'lodash'

export interface ISeason extends IMedia {
	activeId?: number
	index: number
	fn: (id: number, title: string, percent:number) => void
	logo: string
}

const Season: FC<ISeason> = ({ isActive = false, items, fn, logo, title, activeId }) => {

	return (
		<div className={styles.season}>
			<div className={cn(!isActive ? 'hidden' : styles.active)}>
				<Swiper
					modules={[Navigation]}
					className={styles.slider}
					slidesPerView={'auto'}
					centeredSlides={false}
					spaceBetween={0}
					navigation
				>
					{items.map((item) => (
						<SwiperSlide className={cn(styles.slide)} key={item.file}>
							<button
								className={cn(styles.episode, (item.file === activeId) && styles.activeEpisode)}

								onClick={() => {
									return fn(item.file, getListDot([title, item.title]), item.chunk)
								}}
							>
								<div className={styles.imageBox}>
									<img
										src={logo}
										alt={item.title}
									/>
									<img
										src={logo}
										alt={item.title}
										className={styles.poster}
									/>

								</div>
								<ProgressBar progress={item.chunk}/>
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
