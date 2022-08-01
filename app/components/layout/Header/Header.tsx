import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FC } from 'react'

import { LINKS } from '../../../config/links'
import Button from '../../ui/form-elemets/Button'
import Search from '../Search/Search'

import Logo from './Logo'
import styles from './header.module.scss'
import NavMenu from './nav-menu/NavMenu'
import { useRuble } from '../../../hooks/useAuth'

const Burgers = dynamic(() => import('./burgers/Burgers'), {
	ssr: false,
})

const Header: FC = () => {
	const isRuble = useRuble()
	return (
		<div className={styles.header}>
			<div className={styles.start}>
				<Logo />
				<NavMenu />
			</div>

			<div className={styles.end}>
				{isRuble && <Link href={LINKS.RUBLE}>
					<a className={'hidden xl:block'}>
						<Button>Попробовать за рубль</Button>
					</a>
				</Link>	}
				<Search />
				<Burgers />
			</div>
		</div>
	)
}

export default Header
