import React, { Dispatch, FC, MouseEvent, RefObject, SetStateAction, useEffect, useRef, useState } from 'react'
import styles from './volume.module.scss'
import cn from 'classnames'
import MaterialIcon from '@/ui/MaterialIcon'
import ReactPlayer from 'react-player'

const Volume: FC<{ volume: number, setVolume: (volume: number) => void, videoRef: RefObject<ReactPlayer> }> = ({
																																																								 volume,
																																																								 setVolume,
																																																								 videoRef,
																																																							 }) => {

	const volumeRef = useRef<HTMLDivElement>(null)
	const [isVisible, setIsVisible] = useState(false)
	const [volumePercent, setVolumePercent] = useState(100)

	const increaseVolume = () => {
		if (volume < 100) {
			setVolume(Math.min(volume + 10, 100))
		}
	}

	const decreaseVolume = () => {
		if (volume > 0) {
			setVolume(Math.max(volume - 10, 0))
		}
	}
	const handleVolumeChange = (e: MouseEvent) => {
		const rect = e.currentTarget.getBoundingClientRect()
		const relativeClickY = e.clientY - rect.top
		const clickPercent = 100 - Math.trunc(((relativeClickY + 60) / 160) * 100)

		if (clickPercent > 95) {
			setVolumePercent(100)
		} else if (clickPercent < 5) {
			setVolumePercent(0)
		} else {
			setVolumePercent(clickPercent)
		}
		setVolume(volumePercent)
	}


	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowUp') {
				event.preventDefault()
				increaseVolume()
			} else if (event.key === 'ArrowDown') {
				event.preventDefault()
				decreaseVolume()
			}
		}

		const handleWheel = (event: WheelEvent) => {
			event.preventDefault()
			const delta = event.deltaY / Math.abs(event.deltaY) // Определяем направление движения колеса
			if (delta === 1) {
				decreaseVolume()
			} else if (delta === -1) {
				increaseVolume()
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		if (volumeRef.current) {
			volumeRef.current.addEventListener('wheel', handleWheel) // Добавляем обработчик для колеса мыши
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			if (volumeRef.current) {
				volumeRef.current.removeEventListener('wheel', handleWheel) // Удаляем обработчик для колеса мыши
			}
		}
	}, [volume])

	useEffect(() => {
		setIsVisible(true)
		setTimeout(() => setIsVisible(false), 7000)
	}, [volume])
	// useEffect(() => {
	// 	setIsVisible(false)
	//
	// }, [])


	return (
		<div className={cn(styles.volume)} id={'volume'} ref={volumeRef}>
			<div className={cn(styles.progress, isVisible ? 'visible' : 'invisible')} onClick={handleVolumeChange}>
				<div className={cn(styles.border)}>
					<div className={cn(styles.value)} style={{ height: volume + '%' }}></div>
				</div>
				{/*<div className={'text-white'}>{volume}</div>*/}
			</div>
			<button onClick={() => setIsVisible(!isVisible)}>
				{volume==0?<MaterialIcon name={'MdVolumeOff'} />:volume<50?<MaterialIcon name={'MdVolumeDown'}/>:<MaterialIcon name={'MdVolumeUp'} />}
			</button>
		</div>
	)
}

export default Volume
