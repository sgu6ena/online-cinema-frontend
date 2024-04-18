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

	const increaseVolume = () => {
		if (volume < 10) {
			setVolume(Math.min(volume + 1, 10)) // Увеличиваем громкость на 1, но не более 10
		}
	}

	const decreaseVolume = () => {
		if (volume > 0) {
			setVolume(Math.max(volume - 1, 0)) // Уменьшаем громкость на 1, но не менее 0
		}
	}
	const handleVolumeChange = (e: MouseEvent) => {
		const rect = e.currentTarget.getBoundingClientRect()
		const relativeClickY = e.clientY - rect.top
		const newVolume = 10 - Math.trunc((((relativeClickY / rect.height) * 10) + 16) / 4) // Преобразуем проценты в значение громкости от 0 до 10
		setVolume(newVolume)
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
	useEffect(() => {
		setIsVisible(false)

	}, [])
	return (
		<div className={cn(styles.volume)} id={'volume'} ref={volumeRef}>
			<div className={cn(styles.progress, isVisible ? 'visible' : 'invisible')} onClick={handleVolumeChange}>
				<div className={cn(styles.border)}>
					<div className={cn(styles.value, `h-${4 * volume}`)}></div>
				</div>
				<div className={'text-white'}>{volume}</div>
			</div>
			<button onClick={() => setIsVisible(!isVisible)}>
				<MaterialIcon name={'MdVolumeUp'} />
			</button>
		</div>
	)
}

export default Volume
