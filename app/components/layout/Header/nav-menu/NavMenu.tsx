import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { headerNavMenu } from './menu.data'
import styles from './navMenu.module.scss'

const NavMenu = () => {
	const { asPath } = useRouter()

	return (
		<div className={styles.navMenu}>
			<ul>
				{headerNavMenu.map((i) => (
					<li
						key={i.link}
						className={cn({
							[styles.active]: asPath.split('?')[0] === i.link,
						})}
					>
						<Link href={i.link}>
							<a>{i.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default NavMenu
