import { FC } from 'react'

import { useAuth } from '../../../../../hooks/useAuth'
import { useSettings } from '../../../../../hooks/useSettings'

import CodeFromSms from './CodeFromSms'
import SendSms from './SendSms'
import styles from './modalPay.module.scss'
import Link from 'next/link'
import Button from '../../../../ui/form-elemets/Button'
import { LINKS } from '../../../../../config/links'

const Pay: FC = () => {
	const { user } = useAuth()
	const { isLoading, isSmsSend } = useSettings()

	return (
		<>
			{!user ? (
				<div className={styles.modalText}>
					<p>Необходимо авторизироваться</p>
					<Link href={LINKS.LOGIN}><a><Button className={'mt-5'}>Войти</Button></a></Link>
				</div>
			) : isLoading ? (
				<p className={styles.modalText}>Загрузка...</p>
			) : !isSmsSend ? (
				<SendSms />
			) : (
				<>
					<CodeFromSms />
				</>
			)}

		</>
	)
}

export default Pay
