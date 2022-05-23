import { createAsyncThunk } from '@reduxjs/toolkit'


import { AuthService } from '../../services/auth/auth.service'
import { toastError } from '../../utils/toast-error'

import { IAuthResponse, ILoginPassword, IRegister, ITokens } from './user.interface'
import { toast } from 'react-hot-toast'

export const register = createAsyncThunk<IAuthResponse, IRegister>(
	'register',
	async ({ email, password, login }, thunkApi
	) => {
		try {
			const response = await AuthService.register(email, password, login)
			toast.success( 'Регистрация прошла успешно')
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
