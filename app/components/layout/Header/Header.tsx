import { FC } from 'react'

import styles from '../Layout.module.scss'
import Logo from '../Navigation/Logo'
import Search from '../Sidebar/Search/Search'

import Avatar from './Avatar'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.end}>
				<Search />
				<Avatar />
			</div>
		</div>
	)
}

export default Header
