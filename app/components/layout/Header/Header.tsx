import dynamic from 'next/dynamic'
import { FC } from 'react'

import styles from '../monostyle.module.scss'
import Logo from './Logo'
import Search from '../Search/Search'

import Burger from './burger/Burger'
import Button from '../../ui/form-elemets/Button'
import Link from 'next/link'
import { LINKS } from '../../../config/links'
import NavMenu from './nav-menu/NavMenu'

const Avatar = dynamic(() => import('./avatar/Avatar'), {
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
				<Link href={LINKS.RUBLE}><a className={'hidden xl:block'}><Button>Попробовать за рубль</Button></a></Link>
				<Search />
				<Avatar />
				<Burger />
			</div>


		</div>
	)
}

export default Header
