import { FC, useEffect } from 'react'

import { useActions } from '../../../../../hooks/useActions'

import styles from './modalPay.module.scss'
import { getUserData } from '../../../../../store/user/user.actions'
import { useSettings } from '../../../../../hooks/useSettings'

interface IModal {
	setIsShow: (isShow: boolean) => void
}

const Modal: FC<IModal> = ({ setIsShow, children }) => {
	const { resetIsSendSms, getUserData } = useActions()
	const { isPayed } = useSettings()
	useEffect(() => {
		setIsShow(true)
	}, [])

	const closeModal = () => {
		setIsShow(false)
		resetIsSendSms()
		getUserData()
	}
	useEffect(() => {
		if (isPayed) {
			setIsShow(false)
		}
	}, [isPayed])
	return (
		<div className={styles.wrapper}>
			<div className={styles.back} onClick={closeModal}></div>
			<div className={styles.modal}>
				<div className={styles.card}>{children}</div>
			</div>
		</div>
	)
}

export default Modal
