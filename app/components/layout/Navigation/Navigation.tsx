import { FC } from 'react'

import Logo from '../Header/Logo'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<MenuContainer />
		</div>
	)
}

export default Navigation
