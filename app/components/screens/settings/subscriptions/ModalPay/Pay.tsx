import { FC } from 'react'
import { useSettings } from '../../../../../hooks/useSettings'

import CodeFromSms from './CodeFromSms'
import SendSms from './SendSms'
import styles from './modalPay.module.scss'
import { usePoint } from '@/hooks/useAuth'
import ApplySub from '@/screens/settings/subscriptions/ModalPay/applySub'

const Pay: FC<{setIsShow: (isShow: boolean) => void,  id: number|string, text: string, isPromo?:boolean, isSubscribed:boolean }> = ({ setIsShow,id, text, isPromo, isSubscribed }) => {
	const { isLoading, isSmsSend } = useSettings()
	const point = usePoint()
	const isPoint = Boolean(point)
	return (
		<>
			{isLoading
				? <p className={styles.modalText}>Загрузка...</p>
				: isPoint? <ApplySub point={point as string} setIsShow={setIsShow} service={id.toString()}/>:!isSmsSend
					? <SendSms isSubscribed={isSubscribed} id={id}  text={text} isPromo={isPromo}/>
					: <CodeFromSms setIsShow={setIsShow} isSubscribed={isSubscribed} id={id} text={text}  isPromo={isPromo}/>}
		</>
	)
}

export default Pay
