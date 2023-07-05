import { FC } from 'react'
import { useSettings } from '../../../../../hooks/useSettings'

import CodeFromSms from './CodeFromSms'
import SendSms from './SendSms'
import styles from './modalPay.module.scss'

const Pay: FC<{ id: number, text: string }> = ({ id, text }) => {
	const { isLoading, isSmsSend } = useSettings()

	return (
		<>
			{isLoading
				? <p className={styles.modalText}>Загрузка...</p>
				: !isSmsSend
					? <SendSms id={id} text={text}/>
					: <CodeFromSms  id={id} text={text} />}
		</>
	)
}

export default Pay
