import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '../../../assets/images/logo.svg'
import { LINKS } from '../../../config/links'
import styles from './header.module.scss'

const Logo: FC = () => {
	return (
		<Link href={LINKS.MAIN}>
			<a className={styles.logo}>
				<div className={styles.img}>
					<Image
						src={logoImage}
						height={30}
						width={30}
						alt='Portal'
						draggable={false}
					/>
				</div>
				<span className={styles.text}>PORTAL</span>
			</a>
		</Link>
	)
}

export default Logo
