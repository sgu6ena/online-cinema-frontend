import React, { FC } from 'react'
import SkeletonLoader from '../ui/SkeletonLoader'
import { SliderMovieBlock } from './SliderMovieBlock'

const MovieSkeleton: FC = () => {
	return (
		<div className={'md:px-layout'}>
			<div className='md:pr-5 md:pt-layout flex lg:flex-row flex-col justify-between'>
				<div className='lg:w-2/5 mr-5 w-full'>

					<SkeletonLoader count={1} className={'md:h-96 h-60'} />
					<div className='md:w-32 pt-3'>
						<SkeletonLoader count={1} className={'md:h-12 md:w-12 '} />
					</div>
				</div>
				<div className='lg:w-3/5 w-full'>
					<div className='md:w-3/4 lg:flex-row flex-col'>
						<div className='md:w-60'>
							<SkeletonLoader count={1} className={'h-12 w-12 '} />
						</div>
						<div className='w-full'>
							<SkeletonLoader count={1} className={'h-5 mt-10'} />
						</div>
						<div className='w-96'>
							<SkeletonLoader count={1} className={'h-5 mt-10'} />
						</div>
					</div>
					<SkeletonLoader count={6} className={'h-5 mt-6'} />
				</div>
			</div>
			<div className="pr-5 pt-layout">
				<SliderMovieBlock />
			</div>

		</div>
	)
}

export default MovieSkeleton