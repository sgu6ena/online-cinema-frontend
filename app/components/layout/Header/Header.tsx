import dynamic from 'next/dynamic'
import { FC } from 'react'

import Search from '../Search/Search'

import Logo from './Logo'
import Ruble from './Ruble'
import styles from './header.module.scss'
import NavMenu from './nav-menu/NavMenu'

const Burgers = dynamic(() => import('./burgers/Burgers'), {
	ssr: false,
})

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.start}>
				<Logo />
			</div>
			<div>
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
