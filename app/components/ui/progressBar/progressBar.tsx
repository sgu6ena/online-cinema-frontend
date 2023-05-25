import React, { FC, useEffect } from 'react'

const ProgressBar: FC<{ progress: number }> = ({ progress }) => {
	const percent = Math.ceil(progress) + '%'
	const isProgress = progress > 0
	return (
		<div className='flex'>
			{
				isProgress ? <div className={'px-5 z-70 -mt-[20px] w-full'}>
					<div className='bg-gray-300 rounded z-50 h-[4px] w-full '>

					</div>
					<div className='bg-primary rounded z-60 -mt-[5px] h-[6px]' style={{ width: percent, background:    "linear-gradient(90deg, #7B4397 0%, #DC2430 100%)" }}>

					</div>
				</div> : null
			}


		</div>
	)
}

export default ProgressBar