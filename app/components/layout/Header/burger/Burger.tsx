import Link from 'next/link'
import { useEffect, useState } from 'react'


import styles from '../../Layout.module.scss'

import { headerMenu } from './menu.data'
import cn from 'classnames'
import { useRouter } from 'next/router'

const Burger = () => {
	const { asPath } = useRouter()
	const [isShow, setIsShow] = useState(false)

	const toggleMenu = () => {
		setIsShow(!isShow)
	}
	useEffect(() => {
		setIsShow(false)
	}, [asPath])

	return (
		<div className={styles.menu}>
			<div className={cn(styles.container, isShow ? styles.change : '')} onClick={toggleMenu}>
				<div className={styles.bar1}></div>
				<div className={styles.bar2}></div>
				<div className={styles.bar3}></div>
			</div>

			<ul className={isShow ? 'active' : 'hidden'}>
				{headerMenu.map((i) => (
					<li key={i.link}>
						<Link href={i.link}>
							<a>{i.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Burger
