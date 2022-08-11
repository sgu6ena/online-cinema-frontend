import { FC, useState } from 'react'
import { RiListCheck2 } from 'react-icons/ri'

import { useAuth } from '../../../../hooks/useAuth'
import MaterialIcon from '../../../ui/MaterialIcon'
import Button from '../../../ui/form-elemets/Button'
import Heading from '../../../ui/heading/Heading'
import Subheading from '../../../ui/heading/Subheading'
import styles from '../settings.module.scss'

import Pay from './ModalPay/Pay'
import Modal from './ModalPay/Modal'

const Subscriptions: FC = () => {
	const { user, isLoading } = useAuth()
	const isSubscribed = !!user?.paid
	const date = user?.dtEnd

	const [isShowModal, setShowModal] = useState(false)

	return (
		<div>
			<Heading title={'ПОДПИСКА'} className='mb-5' />
			{isLoading && <div>Loading...</div>}
			<div className={styles.card}>
				<img src='/images/settings/subs.png' alt='' className={'w-full'} />
				<Subheading title='Смотреть в удовольствие' />
				<div className={styles.line}>
					<div className={styles.icon}>
						<RiListCheck2 />
					</div>
					<div>
						<div className={styles.title}>Большая коллекция</div>
						<div className={styles.subtitle}>
							Известные топовые фильмы и новинки
						</div>
					</div>
				</div>
				<div className={styles.line}>
					<div className={styles.icon}>
						<MaterialIcon name={'MdTv'} />
					</div>
					<div>
						<div className={styles.title}>На любом устройстве</div>
						<div className={styles.subtitle}>
							Смотрите на смартфоне, ноутбуке, телевизоре
						</div>
					</div>
				</div>
				<div className={styles.line}>
					<div className={styles.icon}>
						<MaterialIcon name={'MdDoDisturb'} />
					</div>
					<div>
						<div className={styles.title}>Без рекламы</div>
						<div className={styles.subtitle}>
							Видео не прервется на самом интересном месте
						</div>
					</div>
				</div>
				{isSubscribed && (
					<div>
						<div className={'text-green-500 font-bold'}>Подписка оформлена</div>
						<div className={styles.subtitle}>
							{date}{' '}
						</div>
					</div>
				)}
				{isSubscribed ? (
					<Button className='bg-gray-600'>Отменить подписку</Button>
				) : (
					<Button onClick={() => setShowModal(!isShowModal)}>
						Оформить подписку
					</Button>
				)}
			</div>

			{isShowModal && <Modal setIsShow={setShowModal}><Pay /> </Modal>}
		</div>
	)
}

export default Subscriptions
