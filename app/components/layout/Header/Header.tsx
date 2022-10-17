import dynamic from 'next/dynamic'
import { FC } from 'react'


import Search from '../Search/Search'

import Logo from './Logo'
import styles from './header.module.scss'
import NavMenu from './nav-menu/NavMenu'
import Ruble from './Ruble'

const Burgers = dynamic(() => import('./burgers/Burgers'), {
	ssr: false,
})

const Header: FC = () => {


	return (
		<div className={styles.header}>
			<div className={styles.start}>
				<Logo />
				<NavMenu />
			</div>
			<div className={styles.end}>
				<Ruble />
				<Search />
				<Burgers />
			</div>
		</div>
	)
}

export default Header
