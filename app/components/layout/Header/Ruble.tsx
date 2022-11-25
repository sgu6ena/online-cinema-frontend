import Modal from '../../screens/settings/subscriptions/ModalPay/Modal'
import Pay from '../../screens/settings/subscriptions/ModalPay/Pay'
import Button from '../../ui/form-elemets/Button'
import styles from './header.module.scss'
import { FC, useState } from 'react'
import Link from 'next/link'
import { LINKS } from '../../../config/links'
import { useAuth, useRuble } from '../../../hooks/useAuth'
import { getMoviesUrl } from '../../../config/api.config'

const Ruble: FC = () => {


	const { user } = useAuth()
	const isRuble = useRuble()
	const isVisible = isRuble || !user
	const [isShowModal, setShowModal] = useState(false)
	return (
		<div>
			{isVisible && (
				<>
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
						Попробовать за рубль
					</Button>
				</>
			)}
		</div>
	)
}

export default Ruble
