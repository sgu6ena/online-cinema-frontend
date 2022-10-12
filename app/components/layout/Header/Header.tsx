import dynamic from 'next/dynamic'
import { FC, useState } from 'react'

import { useAuth, useRuble } from '../../../hooks/useAuth'
import Modal from '../../screens/settings/subscriptions/ModalPay/Modal'
import Pay from '../../screens/settings/subscriptions/ModalPay/Pay'
import Button from '../../ui/form-elemets/Button'
import Search from '../Search/Search'

import Logo from './Logo'
import styles from './header.module.scss'
import NavMenu from './nav-menu/NavMenu'

const Burgers = dynamic(() => import('./burgers/Burgers'), {
	ssr: false,
})

const Header: FC = () => {
	const { user } = useAuth()
	const isRuble = useRuble()
	const isVisible = isRuble || !user

	const [isShowModal, setShowModal] = useState(false)

	return (
		<div className={styles.header}>
			<div className={styles.start}>
				<Logo />
				<NavMenu />
			</div>

			<div className={styles.end}>
				{isVisible && (
					<>
						{isShowModal && (
							<Modal setIsShow={setShowModal}>
								<Pay />
							</Modal>
						)}
						<Button onClick={() => setShowModal(!isShowModal)} className={styles.ruble}>
							Попробовать за рубль
						</Button>
					</>
				)}
				<Search />
				<Burgers />
			</div>
		</div>
	)
}

export default Header
