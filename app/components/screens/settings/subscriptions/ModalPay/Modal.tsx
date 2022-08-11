import { FC, useEffect } from 'react'

import styles from './modalPay.module.scss'

interface IModal {
	setIsShow: (isShow: boolean) => void
}

const Modal: FC<IModal> = ({ setIsShow, children }) => {
	useEffect(() => {
		setIsShow(true)
	}, [])

	return (
		<div className={styles.wrapper}>
			<div className={styles.back} onClick={() => setIsShow(false)}></div>
			<div className={styles.modal}>
				<div className={styles.card}>{children}</div>
			</div>
		</div>
	)
}

export default Modal
