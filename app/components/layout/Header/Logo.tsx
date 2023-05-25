import Link from 'next/link'
import { FC } from 'react'

import { LINKS } from '@/config/links'
import styles from './header.module.scss'

const Logo: FC = () => {
	return (
		<Link href={LINKS.MAIN}>
			<a className={styles.logo}>
				<div className={styles.img}>
					<img
						src={'/svg/logo/logo1.svg'}

						width={140}
						alt='PORTAL'
						draggable={false}
					/>
				</div>
				{/*<span className={styles.text}>PORTAL</span>*/}
			</a>
		</Link>
	)
}

export default Logo
