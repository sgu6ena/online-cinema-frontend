import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

import { PortalService } from '../../api/portal.service'
import { toastError } from '@/utils/toast-error'

import {
	IChangeConf,
	IChangeEmail,
	IChangePassword,
	IChangePhone,
	ICheckSms,
	ISendSms, ISendSmsPromo,
	ISubscpition,
} from './settings.interface'
import { activatePromoCode } from '@/config/api.config'

export const sendSMS = createAsyncThunk<any, ISendSms>(
	'sendSMS',
	async ({ mobile, service }, thunkApi) => {
		try {
			const response = await PortalService.sendSms(mobile, service as number)
			toast.success('Смс было отправлено')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)


export const sendSMSPromo = createAsyncThunk<any, ISendSmsPromo>(
	'sendSMSPromo',
	async ({ mobile, code }, thunkApi) => {
		try {
			const response = await PortalService.sendSmsPromo(mobile, code)
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
	async ({ sms, service }, thunkApi) => {
		try {
			const response = await PortalService.checkSms(sms, service as number)
			toast.success('Успешно активировано')
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const changeSubscriptions = createAsyncThunk<any, any>(
	'changeSubscriptions',
	async ({ mobile, service }, thunkApi) => {
		try {
			const response = await PortalService.changeSubscriptions({mobile, service})
			toast.success('Успешно')
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const changeSubscriptionsPromo = createAsyncThunk<any, any>(
	'changeSubscriptionsPromo',
	async ({ mobile, code }, thunkApi) => {
		try {
			const response = await PortalService.changeSubscriptions({ mobile, code })
			toast.success('Успешно')
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
);
//
// export const changeSubscriptionsPromo = createAsyncThunk<any, any>(
// 	'changeSubscriptions',
// 	async ({ sms, code }, thunkApi) => {
// 		try {
// 			const response = await PortalService.changeSubscriptions(sms, code )
// 			toast.success('Успешно')
// 			return response
// 		} catch (error) {
// 			return thunkApi.rejectWithValue(error)
// 		}
// 	}
// )

export const changePassword = createAsyncThunk<any, IChangePassword>(
	'changePassword',
	async ({ passwordOld, password }, thunkApi) => {
		try {
			const response = await PortalService.changePass(passwordOld, password)
			toast.success('Пароль был изменен')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const changePhone = createAsyncThunk<any, IChangePhone>(
	'changePhone',
	async ({ phone }, thunkApi) => {
		try {
			const response = await PortalService.changePhone(phone)
			toast.success('Выслано подтверждение на телефон')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)
export const changePhoneConf = createAsyncThunk<any, IChangeConf>(
	'changePhoneConf',
	async ({ code }, thunkApi) => {
		try {
			const response = await PortalService.changePhoneConf(code)
			toast.success('Телефон был изменен')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)

export const changeEmail = createAsyncThunk<any, IChangeEmail>(
	'changeEmail',
	async ({ email }, thunkApi) => {
		try {
			const response = await PortalService.changeEmail(email)
			toast.success('Выслано подтверждение на e-mail')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)

export const changeEmailConf = createAsyncThunk<any, IChangeConf>(
	'changeEmailConf',
	async ({ code }, thunkApi) => {
		try {
			const response = await PortalService.changeEmailConf(code)
			toast.success('E-mail был изменен')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)

export const unsubscribe = createAsyncThunk<any, void>(
	'unsubscribe',
	async (_, thunkApi) => {
		try {
			const response = await PortalService.unsubscription()
			toast.success('Подписка была отменена')
			return response
		} catch (error) {
			toastError('Произошла ошибка')
		}
	}
)

export const smartActive = createAsyncThunk<any, { code: string }>(
	'smartActive',
	async ({ code }, thunkApi) => {
		try {
			const response = await PortalService.activateSmart(code)
			toast.success('Успешно активировано')
			return response
		} catch (error) {
			toastError('Произошла ошибка')
		}
	}
)

export const promoCode = createAsyncThunk<any, { code: string }>(
	'promoCode',
	async ({ code }, thunkApi) => {
		try {
			const response = await PortalService.infoPromocode(code)
			toast.success('Промокод успешно активирован')
			return response
		} catch (error) {
			toastError(error)
		}
	}
)

export const getSubscriptions = createAsyncThunk<ISubscpition[], void>(
	'getSubscriptions',
	async (_, thunkApi) => {
		try {
			const response = await PortalService.getSubscriptions()
			return response
		} catch (error) {
			toastError('ошибка получения подписки')
			return thunkApi.rejectWithValue(error)
		}
	},
)