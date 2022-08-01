import { FC } from 'react'
import Heading from '../../ui/heading/Heading'
import { settingsMenu } from './menu.data'
import Link from 'next/link'
import styles from "./settings.module.scss"

const Settings: FC = ({children}) => {
	return (
		<div className={styles.settings}>
				<div className={styles.left}>
					<Heading title={'НАСТРОЙКИ'} className='mb-20' />
					<ul >
						{settingsMenu.map(item => <li key={item.link} ><Link href={item.link}><a>{item.title}</a></Link></li>)}
					</ul>
				</div>
				<div className={styles.right}>
					{children}
				</div>
		</div>
	)
}

export default Settings
