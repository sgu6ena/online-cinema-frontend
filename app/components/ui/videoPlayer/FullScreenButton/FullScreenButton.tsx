import React, { FC } from 'react'
import MaterialIcon from '@/ui/MaterialIcon'
import styles from './button.module.scss'
const FullScreenButton:FC<{toggleFullScreen:()=>void}> = ({ toggleFullScreen }) => {
	return (
		<button onClick={toggleFullScreen} className={styles.button}>
			<MaterialIcon name={'MdFullscreen'}/>
		</button>
	);
};

export default FullScreenButton;
