import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import MaterialIcon from '../../../ui/MaterialIcon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<a>
					<MaterialIcons.MdDragIndicator />
					{/*<MaterialIcon name={item.icon} />*/}
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
