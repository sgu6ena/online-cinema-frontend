import {FC} from 'react'

import styles from './Galery.module.scss'
import GalleryItem from './GalleryItem'

import {Swiper, SwiperSlide} from "swiper/react";
import {IMoviePortal} from "../../../shared/types/movie.types";

const GallerySlider: FC<{ items: IMoviePortal[] }> = ({items}) => {
  return (
    <Swiper className={styles.gallery}
            slidesPerView={'auto'}
            centeredSlides={false} spaceBetween={10}

    >
      {items.map((item: IMoviePortal) => (
        <SwiperSlide key={item.id} className={styles.slide}>
          <GalleryItem item={item} variant="vertical"/>
          <h4>{`${item.year} `}{item.title}</h4>
          <h5></h5>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default GallerySlider
