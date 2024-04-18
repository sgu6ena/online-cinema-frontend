import React, { FC } from 'react'

const TimeDisplay: FC<{ currentTime: number, duration: number }> = ({ currentTime, duration }) => {
	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
	}

	return (
		<div className={' mx-2 flex justify-between items-center gap-1 text-sm '}>
			<div className={' font-mono border-0'}>  {formatTime(currentTime)} / {formatTime(duration)}</div>
		</div>
	)
}

export default TimeDisplay
