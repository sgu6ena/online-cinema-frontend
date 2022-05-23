import React from 'react'
import SkeletonLoader from '../../ui/SkeletonLoader'

const CatalogLoader = () => {
	return (
		<div className='overflow-hidden'>
			<div className='flex flex-center-between py-5 px-layout flex-grow-0'>
				<SkeletonLoader className={'h-60 w-40  p-20    '} />
				<SkeletonLoader className={'h-60 w-40  p-20      '} />
				<SkeletonLoader className={'h-60 w-40  p-20      '} />
				<SkeletonLoader className={'h-60 w-40  p-20      '} />
				<SkeletonLoader className={'h-60 w-40  p-20      '} />
				<SkeletonLoader className={'h-60 w-40  p-20      '} />
			</div>
			<div className='flex flex-center-between py-5 px-layout flex-grow-0'>
				<SkeletonLoader className={'h-60 w-40  p-20      '} />
				<SkeletonLoader className={'h-60 w-40  p-20      '} />
				<SkeletonLoader className={'h-60 w-40  p-20      '} />
				<SkeletonLoader className={'h-60 w-40  p-20      '} />
				<SkeletonLoader className={'h-60 w-40  p-20      '} />
				<SkeletonLoader className={'h-60 w-40  p-20      '} />
			</div>
		</div>
	)
}

export default CatalogLoader