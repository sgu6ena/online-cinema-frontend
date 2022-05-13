import { FC } from 'react'

import styles from '../Layout.module.scss'
import Logo from '../Navigation/Logo'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Logo />
		</div>
	)
}

export default Header
