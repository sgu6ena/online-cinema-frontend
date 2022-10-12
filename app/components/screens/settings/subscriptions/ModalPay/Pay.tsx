import { FC } from 'react'

import { useSettings } from '../../../../../hooks/useSettings'

import CodeFromSms from './CodeFromSms'
import SendSms from './SendSms'

const Pay: FC = () => {
	const { isLoading, isSmsSend } = useSettings()

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{!isLoading && (!isSmsSend ?  <SendSms /> : <CodeFromSms />)}
		</>
	)
}

export default Pay
