import { createAsyncThunk } from '@reduxjs/toolkit/src/createAsyncThunk'

import { AuthService } from '../../services/auth/auth.service'

import { IAuthResponse, IEmailPassword } from './user.interface'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', '')
		} catch (error) {}
	}
)
