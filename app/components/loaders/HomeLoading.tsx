import React from 'react'

import SkeletonLoader from '../ui/SkeletonLoader'
import styles from './loaders.module.scss'
import { SliderMovieBlock } from './SliderMovieBlock'



const HomeLoading = () => {
	return (
		<div className={'overflow-hidden'}>
			<SkeletonLoader className={styles.mainBanner} />
			<div className='lg:px-layout '>
				<SliderMovieBlock />
				<SliderMovieBlock />
				<SliderMovieBlock />
				<SliderMovieBlock />
				<SliderMovieBlock />
			</div>
		</div>
	)
}

export default HomeLoading
