import { FC } from 'react'

import Header from './Header/Header'
import styles from './Layoutols.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC = ({ children }) => {
	return (
		<div>
			<Header />
			<div className={styles.layout}>
				<Navigation />
				<div className={styles.center}>{children}</div>
				<Sidebar />
			</div>
		</div>
	)
}

export default Layout
