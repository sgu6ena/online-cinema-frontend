import React, { FC, useState } from 'react'
import { ISubscpition } from '@/store/settings/settings.interface'
import Heading from '@/ui/heading/Heading'
import Subheading from '@/ui/heading/Subheading'
import styles from './subscriptions.module.scss'
import Modal from '@/screens/settings/subscriptions/ModalPay/Modal'
import Unsubscribe from '@/screens/settings/subscriptions/ModalPay/Unsubscribe'
import Pay from '@/screens/settings/subscriptions/ModalPay/Pay'

const Sub: FC<{ sub: ISubscpition, isSubscribed:boolean }> = ({
																					sub: {
																						packet_name,
																						packet_id,
																						packet_price,
																						packet_text1,
																						packet_text2,
																						hide,
																					},isSubscribed
																				}) => {


	const [isShowModal, setShowModal] = useState(false)
	return (
		hide ? null :
			<>
				<div className={styles.sub} onClick={() => setShowModal(true)}>
					<div className={styles.cardActive}>
						<Heading className={styles.period} title={packet_text1} />
						<Heading className={'text-white text-lg '} title={packet_text2} />
					</div>
				</div>

				{isShowModal && (
					<Modal setIsShow={setShowModal}>
						{<Pay setIsShow={setShowModal} id={packet_id} text={packet_text2} isSubscribed={isSubscribed}/>}
					</Modal>
				)}
			</>


	)
}

export default Sub