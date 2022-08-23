import { FC } from 'react'

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
