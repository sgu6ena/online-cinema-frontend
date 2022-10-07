import { FC } from 'react'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './monostyle.module.scss'

const Layout: FC = ({ children }) => {
	return (
		<div className={styles.mainStyle}>
			<Header />
			<div className={styles.layout}>
				<div className={styles.center}>{children}</div>
			</div>
			<div className={styles.footer}>
				<Footer />
				<div className={'md:px-layout px-2 text-sm text-gray-600'}>
					СЗАО “Интерднестрком”, 2017 - {new Date().getFullYear()}
				</div>
			</div>
		</div>
	)
}

export default Layout
