import { FC } from 'react'

import styles from '../Layout.module.scss'
import Logo from '../Navigation/Logo'
import Search from '../Sidebar/Search/Search'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<div className={'mr-5'}>
				<Search />
			</div>
		</div>
	)
}

export default Header
