import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { INavItem } from './admin-navigation.interface'

import styles from './AdminNavigation.module.scss'

const AdminNavItem: FC<{ item: INavItem }> = ({ item: { link, title } }) => {
	const { asPath } = useRouter()
	return (
		<li>
			<Link href={link}>
				<a className={cn({ [styles.active]: asPath === link })}>{title}</a>
			</Link>
		</li>
	)
}

export default AdminNavItem
