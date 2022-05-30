import React, {FC} from 'react';
import SkeletonLoader from "../ui/SkeletonLoader";

const MovieSkeleton: FC = () => {
    return (
        <div className='pl-layout pt-layout flex justify-between'>
            <div className='w-3/4 mr-5'>
                <div className='w-3/4 '>
                    <div className='w-60'>
                    <SkeletonLoader count={1} className={'h-12 w-12 '}/>
                    </div>
                    <div className='w-full'>
                        <SkeletonLoader count={1} className={'h-5 mt-10'}/>
                    </div>
                    <div className='w-96'>
                        <SkeletonLoader count={1} className={'h-5 mt-10'}/>
                    </div>

                </div><SkeletonLoader count={5} className={'h-5 mt-6'}/>
            </div>
            <div className='w-1/4 '>
                <SkeletonLoader count={1} className={'h-96'}/>
            </div>
        </div>
    );
};

export default MovieSkeleton;