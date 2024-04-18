import React, { FC, KeyboardEventHandler, useEffect } from 'react'
import MaterialIcon from '@/ui/MaterialIcon'
import styles from './playpause.module.scss'
interface PlayPauseButtonProps {
	playing: boolean;
	togglePlaying: () => void;
}

const PlayPauseButton: FC<PlayPauseButtonProps> = ({ playing, togglePlaying }) => {

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === ' ' || event.key === 'Spacebar') {
				event.preventDefault()
				togglePlaying()
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [playing])

	return (
		<button onClick={togglePlaying} tabIndex={0} className={styles.button}>
			{playing ? <MaterialIcon name='MdPause' /> : <MaterialIcon name='MdPlayArrow' />}
		</button>
	)
}

export default PlayPauseButton
