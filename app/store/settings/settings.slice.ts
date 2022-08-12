import { createSlice } from '@reduxjs/toolkit'

import { sendSMS } from './settings.actions'
import { initialState } from './settings.interface'

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		resetIsSendSms(state) {
			state.isSmsSend = false
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(sendSMS.pending, (state) => {
				state.isLoading = true
			})
			.addCase(sendSMS.fulfilled, (state) => {
				state.isLoading = false
				state.isSmsSend = true
			})
			.addCase(sendSMS.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const settingsAC = settingsSlice.actions

export const { reducer } = settingsSlice
