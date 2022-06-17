import { FC } from 'react'
import { A11y, Autoplay, Lazy, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/lazy'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import MaterialIcon from '../MaterialIcon'
import { ISlide } from '../slider/slider.interface'
import SliderContent from './SliderContent'


const SliderSwiper: FC<{ slides: ISlide[] }> = ({ slides }) => {
	return (
		<Swiper
			loop
			preloadImages={true}
			lazy={{ enabled: true }}
			centeredSlides={true}
			modules={[Navigation, Pagination, A11y, Lazy, Autoplay]}
			spaceBetween={10}
			slidesPerView={'auto'}
			navigation={{ prevEl: '.arrow.right', nextEl: '.arrow.left' }}
		>
			{slides.map((i: any) => (
				<SwiperSlide
					key={i.link}
					style={{
						background:"#101215",
						maxHeight: '600px',
						aspectRatio: '16/9',
						maxWidth: '1300px',
						objectFit: 'cover',
					}}
				>
					<SliderContent slideData={i} />
				</SwiperSlide>
			))}

			<button className={'arrow left z-20'}>
				<MaterialIcon name='MdChevronRight' />
			</button>
			<button className={'arrow right z-10'}>
				<MaterialIcon name='MdChevronLeft' />
			</button>
		</Swiper>
	)
}

export default SliderSwiper
