import { FC } from 'react'

import Header from './Header/Header'
import styles from './monostyle.module.scss'


const Layout: FC = ({ children }) => {
	return (
		<div  className={styles.mainStyle} >
			<Header />
			<div className={styles.layout}>

				<div className={styles.center}>{children}</div>

			</div>
			<div className={styles.footer}>футер</div>
		</div>
	)
}

export default Layout
