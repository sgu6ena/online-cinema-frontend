import { createAsyncThunk } from '@reduxjs/toolkit/src/createAsyncThunk'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '../../services/auth/auth.service'
import { toastError } from '../../utils/toast-error'

import { IAuthResponse, IEmailPassword } from './user.interface'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', '')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', '')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk(
	'auth/logout',
	async (_, thunkApi) => await AuthService.logout()
)
