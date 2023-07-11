import React, { FC, useState } from 'react'
import styles from '@/screens/settings/subscriptions/subscriptions.module.scss'
import Heading from '@/ui/heading/Heading'
import Modal from '@/screens/settings/subscriptions/ModalPay/Modal'
import Pay from '@/screens/settings/subscriptions/ModalPay/Pay'
import Unsubscribe from '@/screens/settings/subscriptions/ModalPay/Unsubscribe'

const NextSub: FC<{ packet_text_start: string, packet_text2: string, packet_text1: string, point: string, price:any }> = ({		 point,
																																														 packet_text_start,
																																														 packet_text2,
																																														 packet_text1,
	price
																																															}) => {

	const [isShowModal, setShowModal] = useState(false)

	return (
		<>
			<div className={styles.subActive} onClick={() => setShowModal(true)}>
				<div className={styles.cardActive}>
					<Heading className={styles.period} title={packet_text1} />
					<Heading className={'text-white text-lg '} title={	price+' руб.'}  />
					<div className={'mt-2 flex-center-between'}>
						<p className={'text-gray-300 text-end text-xs'}>◉ {point}</p>
						<p className={'text-gray-300 text-end text-xs '}>Начнет действовать с: {packet_text_start}</p>
					</div>
				</div>
			</div>
			{isShowModal && (
				<Modal setIsShow={setShowModal}>

					<Unsubscribe setIsShow={setShowModal} />
				</Modal>
			)}
		</>
	)
}

export default NextSub