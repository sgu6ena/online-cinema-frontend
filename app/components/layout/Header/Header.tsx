import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FC } from 'react'

import { LINKS } from '../../../config/links'
import { useAuth, useRuble } from '../../../hooks/useAuth'
import Button from '../../ui/form-elemets/Button'
import Search from '../Search/Search'

import Logo from './Logo'
import styles from './header.module.scss'
import NavMenu from './nav-menu/NavMenu'

const Burgers = dynamic(() => import('./burgers/Burgers'), {
	ssr: false,
})

const Header: FC = () => {
	const { user } = useAuth()
	const isRuble = useRuble()
	const isVisible = isRuble || !user
	return (
		<div className={styles.header}>
			<div className={styles.start}>
				<Logo />
				<NavMenu />
			</div>

			<div className={styles.end}>
				{isVisible && (
					<Link href={LINKS.RUBLE}>
						<a className={'hidden xl:block'}>
							<Button>Попробовать за рубль</Button>
						</a>
					</Link>
				)}
				<Search />
				<Burgers />
			</div>
		</div>
	)
}

export default Header
