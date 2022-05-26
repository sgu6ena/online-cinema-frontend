import Link from 'next/link'
import { FC } from 'react'
import { A11y, Lazy, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/lazy'
import { Swiper, SwiperSlide } from 'swiper/react'

import MaterialIcon from '../MaterialIcon'
import { ISlide } from '../slider/slider.interface'
import Image from 'next/image'

const SliderSwiper: FC<{ slides: ISlide[] }> = ({ slides }) => {
	return (
		<Swiper
			loop
			preloadImages={true}
			// lazy={{ enabled: true, checkInView: true,  }}
			centeredSlides={true}
			modules={[Navigation, Pagination, A11y, Lazy, Autoplay]}
			spaceBetween={10}
			breakpoints={{
				1200: {
					slidesPerView: 1.1,
				},
				1800: {
					slidesPerView: 1.2,
				},
				2000: {
					slidesPerView: 1.4,
				},
				2500: {
					slidesPerView: 1.8,
				},
			}}

			navigation={{ prevEl: '.arrow.right', nextEl: '.arrow.left' }}
			autoplay={{delay:7000}}
			pagination={{
				clickable: true,
				bulletClass: 'slider-pagination-bullet',
				bulletActiveClass: 'slider-pagination-bullet-active',
				horizontalClass: 'slider-pagination',
			}}
		>
			{slides.map((i: any) => (
				<SwiperSlide key={i.link}>
					<Link href={i.link}>
						<a>
							<img src={i.bigPoster} alt={i.title} className={'rounded-2xl '} />
						</a>
					</Link>
				</SwiperSlide>
			))}

			<button className={'arrow left'}>
				<MaterialIcon name="MdChevronRight" />
			</button>
			<button className={'arrow right'}>
				<MaterialIcon name="MdChevronLeft" />
			</button>
		</Swiper>
	)
}

export default SliderSwiper
