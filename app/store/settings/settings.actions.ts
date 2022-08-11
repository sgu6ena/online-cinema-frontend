import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

import { PortalService } from '../../api/portal.service'
import { toastError } from '../../utils/toast-error'

import { ICheckSms, ISendSms } from './settings.interface'

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

export const checkSMS = createAsyncThunk<any, ICheckSms>(
	'checkSMS',
	async ({ sms, promo }, thunkApi) => {
		try {
			const response = await PortalService.checkSms(sms, promo)
			toast.success('ок')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)
