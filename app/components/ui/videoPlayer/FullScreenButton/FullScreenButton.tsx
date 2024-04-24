import React, { FC, useEffect } from 'react'
import MaterialIcon from '@/ui/MaterialIcon'
import styles from './button.module.scss'
import { useActions } from '@/hooks/useActions'
import screenfull from 'screenfull'
import { useVideo } from '@/hooks/useVideo'
const FullScreenButton = () => {
	const {setFullScreen} = useActions()
	const {fullScreen } = useVideo()
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if ( event.key === 'Escape') {
				event.preventDefault()
				screenfull.exit()
				setFullScreen(!fullScreen)
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [fullScreen])


	return (
		<button onClick={(event)=> {
			event.preventDefault()
			setFullScreen(!fullScreen)
			screenfull.toggle()
		}} className={styles.button}>
			<MaterialIcon name={'MdFullscreen'}/>
		</button>
	);
};

export default FullScreenButton;
