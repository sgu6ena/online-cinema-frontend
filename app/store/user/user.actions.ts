import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '../../services/auth/auth.service'
import { toastError } from '../../utils/toast-error'

import { IEmailPassword, IRegister, ITokens } from './user.interface'

export const register = createAsyncThunk<ITokens, IRegister>(
	'register',
	async ({ email, password, login }, thunkApi
	) => {
		try {
			const response = await AuthService.register(email, password, login='test')
			toastr.success('', 'Регистрация прошла успешно')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)
export const login = createAsyncThunk<ITokens, IEmailPassword>(
	'login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('', 'Вы успешно вошли')
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
