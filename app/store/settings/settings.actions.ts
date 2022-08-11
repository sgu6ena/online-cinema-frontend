import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

import { PortalService } from '../../api/portal.service'
import { toastError } from '../../utils/toast-error'

import { ISendSms } from './settings.interface'

export const sendSMS = createAsyncThunk<any, ISendSms>(
	'sendSMS',
	async ({ mobile }, thunkApi) => {
		try {
			const response = await PortalService.sendSms(mobile)
			toast.success('Смс было отправлено')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)
