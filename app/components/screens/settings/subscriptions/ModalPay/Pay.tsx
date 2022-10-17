import { FC } from 'react'
import { useSettings } from '../../../../../hooks/useSettings'

import CodeFromSms from './CodeFromSms'
import SendSms from './SendSms'
import styles from './modalPay.module.scss'

const Pay: FC = () => {
	const { isLoading, isSmsSend } = useSettings()

	return (
		<>
			{isLoading
				? <p className={styles.modalText}>Загрузка...</p>
				: !isSmsSend
					? <SendSms />
					: <CodeFromSms />}
		</>
	)
}

export default Pay
