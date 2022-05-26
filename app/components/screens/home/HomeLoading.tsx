import React from 'react'
import SkeletonLoader from '../../ui/SkeletonLoader'

const HomeLoading = () => {
    return (
        <div className={'overflow-hidden'}>
            <SkeletonLoader style={{aspectRatio: '147/36'}}/>
            <div className='px-layout '>
                <div className='flex justify-between my-5'>
                    <SkeletonLoader className={'h-10 w-60  px-40 mt-5 flex   '}/>
                    <SkeletonLoader className={'h-10 w-60  px-16 mt-5 flex   '}/>
                </div>
                <div className='flex flex-center-between gap-3 flex-grow-0'>
                    <SkeletonLoader className={'h-60 w-40  p-20 mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                </div>
                <div className='flex justify-between my-5'>
                    <SkeletonLoader className={'h-10 w-60  px-40 mt-5 flex   '}/>
                    <SkeletonLoader className={'h-10 w-60  px-16 mt-5 flex   '}/>
                </div>
                <div className='flex flex-center-between gap-3 flex-grow-0'>
                    <SkeletonLoader className={'h-60 w-40  p-20 mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                    <SkeletonLoader className={'h-60 w-40  p-20   mt-5  '}/>
                </div>
            </div>
        </div>
    )
}

export default HomeLoading