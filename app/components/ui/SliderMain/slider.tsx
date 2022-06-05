import Link from 'next/link'
import {FC} from 'react'
import {A11y, Autoplay, Lazy, Navigation, Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/lazy'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Swiper, SwiperSlide} from 'swiper/react'

import MaterialIcon from '../MaterialIcon'
import Button from '../form-elemets/Button'
import {ISlide} from '../slider/slider.interface'

import SliderContent from './SliderContent'
import styles from './slider.module.scss'

const SliderSwiper: FC<{ slides: ISlide[] }> = ({slides}) => {
    return (
        <Swiper
            style={{}}
            loop
            preloadImages={true}
            lazy={{enabled: true}}
            centeredSlides={true}
            modules={[Navigation, Pagination, A11y, Lazy, Autoplay]}
            spaceBetween={10}
            slidesPerView={'auto'}
            // breakpoints={{
            // 	1200: {
            // 		slidesPerView: 1.8,
            // 	},
            // 	1800: {
            // 		slidesPerView: 1.9,
            // 	},
            // 	2000: {
            // 		slidesPerView: 2,
            // 	},
            // 	2500: {
            // 		slidesPerView: 2.1,
            // 	},
            // }}
            // slideActiveClass={styles.mainSlideActive}
            navigation={{prevEl: '.arrow.right', nextEl: '.arrow.left'}}
            // autoplay={{ delay: 10000, waitForTransition: true }}
            // pagination={{
            // 	clickable: true,
            // 	bulletClass: 'slider-pagination-bullet',
            // 	bulletActiveClass: 'slider-pagination-bullet-active',
            // 	horizontalClass: 'slider-pagination',
            // }}
        >
            {slides.map((i: any) => (
                <SwiperSlide
                    key={i.link}
                    style={{
                        maxHeight: '600px',
                        aspectRatio: '16/9',
                        maxWidth: '1300px',
                        objectFit: 'cover',
                    }}
                >
                    <SliderContent slideData={i}/>
                </SwiperSlide>
            ))}

            <button className={'arrow left z-20'}>
                <MaterialIcon name="MdChevronRight"/>
            </button>
            <button className={'arrow right z-10'}>
                <MaterialIcon name="MdChevronLeft"/>
            </button>
        </Swiper>
    )
}

export default SliderSwiper
