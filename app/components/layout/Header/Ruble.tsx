import Modal from '../../screens/settings/subscriptions/ModalPay/Modal'
import Pay from '../../screens/settings/subscriptions/ModalPay/Pay'
import Button from '../../ui/form-elemets/Button'
import styles from './header.module.scss'
import { FC, useState } from 'react'
import Link from 'next/link'
import { LINKS } from '../../../config/links'
import { useAuth, useRuble } from '../../../hooks/useAuth'

const Ruble: FC = () => {
	const { user } = useAuth()
	const isRuble = useRuble()
	const isVisible = isRuble || !user
	const [isShowModal, setShowModal] = useState(false)
	return (
		<div>
			{isVisible && (
				<div>
					{isShowModal && (
						<Modal setIsShow={setShowModal}>
							{!user ? (
								<div className={'p-8 text-center'}>
									<div>Необходимо авторизироваться</div>
									<Link href={`/auth?redirect=${LINKS.SUBSCRIPTIONS}`}>
										<a><Button className={'mt-5'} onClick={() => setShowModal(false)}>Войти</Button></a>
									</Link>
								</div>
							) : <Pay />}
						</Modal>
					)}
					<Button onClick={() => setShowModal(!isShowModal)} className={styles.ruble}>
						14 дней за 1 рубль
					</Button>
				</div>
			)}
		</div>
	)
}

export default Ruble
