import { FC } from 'react'

import Header from './Header/Header'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			<div className={styles.layout}>
				<Navigation />
				<div className={styles.center}>{children}</div>
				<Sidebar />
			</div>
		</>
	)
}

export default Layout
