import { FC, useEffect } from 'react'

import styles from './modalPay.module.scss'
import { useActions } from '../../../../../hooks/useActions'

interface IModal {
	setIsShow: (isShow: boolean) => void
}

const Modal: FC<IModal> = ({ setIsShow, children }) => {
	const { resetIsSendSms } = useActions()

	useEffect(() => {
		setIsShow(true)
	}, [])

	const closeModal=()=>{
		setIsShow(false)
		resetIsSendSms()
	}

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
