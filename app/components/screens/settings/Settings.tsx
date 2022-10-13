import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { LINKS } from '../../../config/links'
import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import Heading from '../../ui/heading/Heading'

import { settingsMenu } from './menu.data'
import styles from './settings.module.scss'

const Settings: FC = ({ children }) => {
	const { push, asPath } = useRouter()
	const { user } = useAuth()
	const { getUserData } = useActions()
	useEffect(() => {
		if (!user) {
			push(LINKS.LOGIN)
		}
	}, [])
	useEffect(() => {
		getUserData()
	}, [asPath])
	return (
		<div className={styles.settings}>
			{user && (
				<>
					<div className={styles.left}>
						<Heading title={'НАСТРОЙКИ'} className="mb-20" />
						<ul>
							{settingsMenu.map((item) => (
								<li key={item.link}>
									<Link href={item.link}>
										<a className={asPath === item.link ? 'text-primary' : ''}>
											{item.title}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.right}>{children}</div>
				</>
			)}
		</div>
	)
}

export default Settings
