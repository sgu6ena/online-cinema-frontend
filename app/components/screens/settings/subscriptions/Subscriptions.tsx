import { FC, useState } from 'react'
import { RiListCheck2 } from 'react-icons/ri'

import { useAuth } from '../../../../hooks/useAuth'
import MaterialIcon from '../../../ui/MaterialIcon'
import Button from '../../../ui/form-elemets/Button'
import Heading from '../../../ui/heading/Heading'
import Subheading from '../../../ui/heading/Subheading'
import styles from '../settings.module.scss'

import Modal from './ModalPay/Modal'
import Pay from './ModalPay/Pay'
import Unsubscribe from './ModalPay/Unsubscribe'

const Subscriptions: FC = () => {
	const { user } = useAuth()
	const isSubscribed = !!user?.paid
	const date = user?.dtEnd
	const flow = user?.dtFlow

	const [isShowModal, setShowModal] = useState(false)

	return (
		<div>
			<Heading title={'ПОДПИСКА'} className='mb-5' />
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
				{/*<div className={styles.line}>*/}
				{/*	<div className={styles.icon}>*/}
				{/*		<MaterialIcon name={'MdDoDisturb'} />*/}
				{/*	</div>*/}
				{/*	<div>*/}
				{/*		<div className={styles.title}>Без рекламы</div>*/}
				{/*		<div className={styles.subtitle}>*/}
				{/*			Видео не прервется на самом интересном месте*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</div>*/}
				{isSubscribed && (
					<div>
						<div className={'text-green-500 font-bold'}>Подписка оформлена</div>
						<div className={styles.subtitle}>{date} </div>
					</div>
				)}
				{isSubscribed ? (
					<>
						{!flow && (
							<button
								className='bg-gray-600 p-2 rounded-layout'
								onClick={() => setShowModal(!isShowModal)}
							>
								Отменить подписку
							</button>
						)}
						<div className={styles.subtitle}>
							{flow
								? 'Вы отменили атоматическое продление '
								: 'Подписка продлится автоматически'}
						</div>
					</>
				) : (
					<Button onClick={() => setShowModal(!isShowModal)}>
						{user?.promo
							? 'Оформить подписку за 1 RUP'
							: 'Оформить подписку за 32 RUP'}
					</Button>
				)}
			</div>

			{isShowModal && (
				<Modal setIsShow={setShowModal}>
					{isSubscribed ? <Unsubscribe setIsShow={setShowModal} /> : <Pay />}
				</Modal>
			)}
		</div>
	)
}

export default Subscriptions
