import { FC } from 'react'

import { useAuth } from '../../../../../hooks/useAuth'
import { useSettings } from '../../../../../hooks/useSettings'

import CodeFromSms from './CodeFromSms'
import SendSms from './SendSms'
import styles from './modalPay.module.scss'

const Pay: FC = () => {
	const { user } = useAuth()
	const { isLoading, isSmsSend } = useSettings()

	return (
		<>
			{!user?.id ? (
				<p className={styles.modalText}>Необходимо авторизироваться</p>
			) : isLoading ? (
				<p className={styles.modalText}>Loading...</p>
			) : !isSmsSend ? (
				<SendSms />
			) : (
				<CodeFromSms />
			)}
		</>
	)
}

export default Pay
