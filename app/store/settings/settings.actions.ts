import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

import { PortalService } from '../../api/portal.service'
import { toastError } from '@/utils/toast-error'

import { IChangeConf, IChangeEmail, IChangePassword, IChangePhone, ICheckSms, ISendSms } from './settings.interface'

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
			toast.success('Успешно активировано')
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

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
			const response = await PortalService.unsubscribe()
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
			const response = await PortalService.activatePromocode(code)
			toast.success('Промокод успешно активирован')
			return response
		} catch (error) {
			toastError('Произошла ошибка')
		}
	}
)
