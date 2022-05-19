import React from 'react'
import SkeletonLoader from '../../ui/SkeletonLoader'

const HomeLoading = () => {
	return (
		<div  className={'overflow-hidden'}>
			<SkeletonLoader className={'h-96'} />
			<div className='p-layout'>
				<div className='flex justify-between'>
					<SkeletonLoader className={'h-10 w-60  px-40 mt-5 flex   '} />
					<SkeletonLoader className={'h-10 w-60  px-16 mt-5 flex   '} />
				</div>
				<div className='flex flex-center-between'>
					<SkeletonLoader className={'h-60 w-40  p-20 mt-5  '} />
					<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
					<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
					<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
					<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
					<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
					<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
				</div>
				<div className='flex justify-between'>
					<SkeletonLoader className={'h-10 w-60  px-60 mt-5 flex   '} />
					<SkeletonLoader className={'h-10 w-60  px-28 mt-5 flex   '} />
				</div>
				<div className='flex flex-center-between'>
					<SkeletonLoader className={'h-60 w-40  p-20 mt-5  '} />
					<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
					<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
					<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
					<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
					<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
					<SkeletonLoader className={'h-60 w-40  p-20   mt-5  '} />
				</div>
			</div>
		</div>
	)
}

export default HomeLoading