import { FC } from 'react'

import {  useSettings } from '../../../../../hooks/useSettings'

import SendSms from './SendSms'
import CodeFromSms from './CodeFromSms'

const Pay: FC = () => {
	const { isLoading, isSmsSend } = useSettings()

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{!isSmsSend && !isLoading ? <SendSms /> : <CodeFromSms />}
		</>
	)
}

export default Pay
