import dynamic from 'next/dynamic'
import { FC } from 'react'

import styles from '../Layout.module.scss'
import Logo from '../Navigation/Logo'
import Search from '../Search/Search'

import Burger from './Burger'
import Button from '../../ui/form-elemets/Button'
import Link from 'next/link'
import { LINKS } from '../../../config/links'

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
				<Link href={LINKS.RUBLE}><a><Button >Попробовать за рубль</Button></a></Link>
				<Search />
				<Avatar />
				<Burger />
			</div>


		</div>
	)
}

export default Header
