import dynamic from 'next/dynamic'
import { FC } from 'react'

import styles from '../Layout.module.scss'
import Logo from '../Navigation/Logo'
import Search from '../Sidebar/Search/Search'

import Burger from './Burger'


const Avatar = dynamic(() => import('./Avatar'), {
	ssr: false,
})

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.start}>

				<Logo />
			</div>

			<div className={styles.end}>
				<Search />
			</div>
			<Avatar />
			<Burger />
		</div>
	)
}

export default Header
