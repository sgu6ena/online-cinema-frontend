import { FC, useEffect } from 'react'
import Heading from '../../ui/heading/Heading'
import { settingsMenu } from './menu.data'
import Link from 'next/link'
import styles from './settings.module.scss'
import { useRouter } from 'next/router'
import { useAuth } from '../../../hooks/useAuth'
import { LINKS } from '../../../config/links'

const Settings: FC = ({ children }) => {
	const { push, asPath } = useRouter()
	const { user, isLoading } = useAuth()

	useEffect(() => {
		if (!user) {
			push(LINKS.LOGIN)
		}
		console.log(asPath)
	}, [])

	return (
		<div className={styles.settings}>
			{!isLoading && user &&
				<>
					<div className={styles.left}>
						<Heading title={'НАСТРОЙКИ'} className='mb-20' />
						<ul>
							{settingsMenu.map(item => <li key={item.link}><Link href={item.link}><a
								className={asPath === item.link ? 'text-primary':''}>{item.title}</a></Link></li>)}
						</ul>
					</div>
					<div className={styles.right}>
						{children}
					</div>
				</>}
		</div>
	)
}

export default Settings
