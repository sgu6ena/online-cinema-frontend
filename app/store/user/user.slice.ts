import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocalStorage } from '../../utils/local-storage'

import { login, logout, register } from './user.actions'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
	isLoading: false,
	user: getStoreLocalStorage('user'),
	isRegistered: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
				state.isRegistered = false
			})
			.addCase(register.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
				state.isRegistered = true
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
				state.user = null
				state.isRegistered = false
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true
				state.isRegistered = false
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
				state.isRegistered = false
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.isLoading = false
				state.user = null
				state.isRegistered = false
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
				state.isRegistered = false

			})
	},
})
export const { reducer } = userSlice
