import React, { FC } from 'react'
import SkeletonLoader from '../ui/SkeletonLoader'
import { SliderMovieBlock } from './SliderMovieBlock'

const MovieSkeleton: FC = () => {
	return (
		<>
			<div className='pr-5 pt-layout flex justify-between'>
				<div className='w-1/3 mr-5'>

					<SkeletonLoader count={1} className={'h-96'} />
					<div className='w-32 pt-3'>
						<SkeletonLoader count={1} className={'h-12 w-12 '} />
					</div>
				</div>
				<div className='w-2/3 '>
					<div className='w-3/4 '>
						<div className='w-60'>
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

		</>
	)
}

export default MovieSkeleton