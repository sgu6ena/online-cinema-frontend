import React, { FC, useState } from 'react'
import styles from '@/screens/settings/subscriptions/subscriptions.module.scss'
import Heading from '@/ui/heading/Heading'
import Modal from '@/screens/settings/subscriptions/ModalPay/Modal'
import Unsubscribe from '@/screens/settings/subscriptions/ModalPay/Unsubscribe'
import Button from '@/ui/form-elemets/Button'


const ActiveSub: FC<{ packet_text_end: string, packet_text2: string, packet_text1: string, point: string }> = ({
																																																								 point,
																																																								 packet_text_end,
																																																								 packet_text2,
																																																								 packet_text1,
																																																							 }) => {
	const [isShowModal, setShowModal] = useState(false)
	return (
		<>
			<div className={styles.subActive} >
				<div className={styles.cardActive}>
					<Heading className={styles.period} title={packet_text1} />
					<Heading className={'text-white text-lg '} title={packet_text2} />
					<div className={'mt-2 flex-center-between'}>
						<p className={'text-gray-300 text-end text-xs'}>◉ {point}</p>
						<p className={'text-gray-300 text-end text-xs '}>Действует до: {packet_text_end}</p>
					</div>
				</div>
			</div>
			<Button className={'w-96'} onClick={() => setShowModal(true)}>Отменить подписку</Button>
			{isShowModal && (
				<Modal setIsShow={setShowModal}>
					<Unsubscribe setIsShow={setShowModal} />
				</Modal>
			)}
		</>
	)
}

export default ActiveSub