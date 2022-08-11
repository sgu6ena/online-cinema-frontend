import { FC } from 'react'

import { useLoadingSendSMS } from '../../../../../hooks/useSettings'

import SendSms from './SendSms'
import CodeFromSms from './CodeFromSms'

const Pay: FC = () => {
	const { isLoading, isSmsSend } = useLoadingSendSMS()

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{!isSmsSend && !isLoading ? <SendSms /> : <CodeFromSms />}
		</>
	)
}

export default Pay
