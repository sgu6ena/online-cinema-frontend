import React, { FC, RefObject, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

interface SeekBarProps {
	videoRef: RefObject<ReactPlayer>;
	currentTime: number;
	progressTime: number;
	duration: number;
	setProgressTime: (time: number) => void;
	onSeek: (time: number) => void;
}

const SeekBar: FC<SeekBarProps> = ({ currentTime, duration, onSeek, videoRef, progressTime, setProgressTime }) => {
	const [progress, setProgress] = useState(0)
	const [loadedTime, setLoadedTime] = useState(0)
	const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const barWidth = e.currentTarget.clientWidth
		const clickPositionX = e.clientX - e.currentTarget.getBoundingClientRect().left
		const clickPercentage = clickPositionX / barWidth
		const newTime = clickPercentage * duration
		onSeek(newTime)
		setProgressTime(0)
		videoRef.current?.seekTo(newTime)
	}

	const handleKeyDown = (e: KeyboardEvent) => {
		const seekStep = 5 // Шаг перемотки в секундах
		if (e.key === 'ArrowLeft') {
			e.preventDefault()
			const newTime = Math.max(currentTime - seekStep, 0) // Новое время не меньше 0
			onSeek(newTime)
			setProgressTime(0)
			videoRef.current?.seekTo(newTime)
		} else if (e.key === 'ArrowRight') {
			e.preventDefault()
			const newTime = Math.min(currentTime + seekStep, duration) // Новое время не больше длительности
			onSeek(newTime)
			setProgressTime(0)
			videoRef.current?.seekTo(newTime)
		}
	}

	useEffect(() => {
		setProgress((currentTime / duration) * 100)

	}, [currentTime, duration, progressTime])
	useEffect(() => {
		setLoadedTime((progressTime / duration) * 100)

	}, [progressTime])

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [currentTime, duration])

	return (
		<div className={'p-1 w-full'} onClick={handleBarClick}>
			<div className='w-full h-2 border border-white overflow-hidden  rounded-3xl relative' >
				<div className='h-2 rounded-3xl bg-gray-600' style={{ width: `${loadedTime}%` }}>
					<div className='h-1.5 rounded-3xl bg-white absolute' style={{ width: `${progress}%`}}>
					</div>
				</div>
			</div>
		</div>

	)
}

export default SeekBar

