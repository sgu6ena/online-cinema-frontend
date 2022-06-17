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
				{/*<Image*/}
				{/*	src={logoImage}*/}
				{/*	height={25}*/}
				{/*	width={35}*/}
				{/*	alt="Portal"*/}
				{/*	draggable={false}*/}
				{/*/>*/}

				<div className={styles.text}>PORTAL</div>
			</a>
		</Link>
	)
}

export default Logo
