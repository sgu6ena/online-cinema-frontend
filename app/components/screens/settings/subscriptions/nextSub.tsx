import React, { FC, useState } from 'react'
import styles from '@/screens/settings/subscriptions/subscriptions.module.scss'
import Heading from '@/ui/heading/Heading'
import Modal from '@/screens/settings/subscriptions/ModalPay/Modal'
import Pay from '@/screens/settings/subscriptions/ModalPay/Pay'

const NextSub: FC<{ packet_text2: string, packet_text1: string, isSubscribed:boolean }> = ({		isSubscribed,
																																																// packet_text_end,
																																																packet_text2,
																																																packet_text1,
																																															}) => {

	const [isShowModal, setShowModal] = useState(false)

	return (
		<>
			<div className={styles.sub} onClick={() => setShowModal(true)}>
				<div className={styles.cardActive}>
					<Heading className={styles.period} title={packet_text1} />
					<Heading className={'text-white text-lg '} title={packet_text2} />
				</div>
			</div>
			{isShowModal && (
				<Modal setIsShow={setShowModal}>
					{<Pay isSubscribed={isSubscribed} id={1} text={packet_text2} />}
				</Modal>
			)}
		</>
	)
}

export default NextSub