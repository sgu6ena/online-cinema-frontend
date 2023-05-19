import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { toast } from 'react-hot-toast'

import { AuthService } from '../../api/auth/auth.service'
import { IRecoveryInput } from '@/screens/auth/auth.interface'
import { toastError } from '@/utils/toast-error'

import {
	IAuthResponse,
	ILoginPassword,
	IRegister,
	ITokens,
} from './user.interface'
import { PortalService } from '../../api/portal.service'
import { saveToStorage } from '../../api/auth/auth.helper'

export const register = createAsyncThunk<IAuthResponse, IRegister>(
	'register',
	async ({ email, password, login }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password, login)
			toast.success('Регистрация прошла успешно')
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

export const recovery = createAsyncThunk<any, IRecoveryInput>(
	'recovery',
	async ({ email }, thunkApi) => {
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
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)
