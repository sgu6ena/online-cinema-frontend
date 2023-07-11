import { FC } from 'react'
import { useSettings } from '../../../../../hooks/useSettings'

import CodeFromSms from './CodeFromSms'
import SendSms from './SendSms'
import styles from './modalPay.module.scss'

const Pay: FC<{ id: number|string, text: string, isPromo?:boolean, isSubscribed:boolean }> = ({ id, text, isPromo, isSubscribed }) => {
	const { isLoading, isSmsSend } = useSettings()

	return (
		<>
			{isLoading
				? <p className={styles.modalText}>Загрузка...</p>
				: !isSmsSend
					? <SendSms isSubscribed={isSubscribed} id={id}  text={text} isPromo={true}/>
					: <CodeFromSms isSubscribed={isSubscribed} id={id} text={text}  isPromo={true}/>}
		</>
	)
}

export default Pay
