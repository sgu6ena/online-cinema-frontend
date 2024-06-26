import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { toast } from 'react-hot-toast'

import { AuthService } from '../../api/auth/auth.service'
import { IRecoveryInput } from '@/screens/auth/auth.interface'
import { toastError } from '@/utils/toast-error'

import {
	IAuthResponse,
	ILoginPassword,
	IRegisterByEmail, IRegisterByMobile,
	ITokens,
} from './user.interface'
import { PortalService } from '../../api/portal.service'
import { saveToStorage } from '../../api/auth/auth.helper'
import router, { useRouter } from 'next/router'
import { LINKS } from '@/config/links'

export const registerByMail = createAsyncThunk<IAuthResponse, IRegisterByEmail>(
	'register_by_email',
	async ({ email }, thunkApi) => {
		try {
			const response = await AuthService.registerEmail(email)
			toast.success('Пароль для входа выслан в письме')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)
export const registerByMobile = createAsyncThunk<IAuthResponse, IRegisterByMobile>(
	'register_by_mobile',
	async ({ phone }, thunkApi) => {
		try {
			const response = await AuthService.registerMobile(phone)
			toast.success('Пароль для входа выслан в смс')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)
export const login = createAsyncThunk<ITokens, ILoginPassword>(
	'login',
	async ({ login, password }, thunkApi) => {
		try {
			const response = await AuthService.login(login, password)
			toast.success('Вы успешно вошли')
			Cookies.set('atp', response.token)
			saveToStorage(response)
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)

export const recovery = createAsyncThunk<any, string>(
	'recovery',
	async (email, thunkApi) => {
		try {
			const response = await AuthService.recovery(email)
			toast.success('Проверьте вашу электронную почту')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)

export const recoveryByPhone = createAsyncThunk<any, string>(
	'recovery',
	async (phone, thunkApi) => {
		try {
			const response = await AuthService.recoveryByPhone(phone)
			toast.success('Введите пароль, который мы отправили на ' + phone)
				router.push(LINKS.LOGIN)
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)

export const logout = createAsyncThunk(
	'logout',
	async (_, thunkApi) => await AuthService.logout(),
)

export const getUserData = createAsyncThunk(
	'getUserData',
	async (_, thunkApi) => {
		try {
			const response = await PortalService.getUser()
			return response.data
		} catch (error) {
			// toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)
