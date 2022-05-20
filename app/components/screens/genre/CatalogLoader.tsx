import React from 'react'
import SkeletonLoader from '../../ui/SkeletonLoader'

const CatalogLoader = () => {
	return (
		<div className='overflow-hidden'>
			<div className='flex flex-center-between p-layout flex-wrap gap-5 flex-grow-0'>
				<SkeletonLoader className={'h-60 w-40  p-20 mt-5  '} />
				<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
				<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
				<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
				<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
				<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
				<SkeletonLoader className={'h-60 w-40  p-20 mt-5  '} />
				<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
				<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
				<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
				<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
				<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
			</div>
		</div>
	)
}

export default CatalogLoader