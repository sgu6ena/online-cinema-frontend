import { createSlice } from '@reduxjs/toolkit'

import {
	changePassword,
	promoCode,
	sendSMS,
	smartActive,
	unsubscribe,
} from './settings.actions'
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
			.addCase(changePassword.pending, (state) => {
				state.isLoading = true
				state.isError = false
			})
			.addCase(changePassword.fulfilled, (state) => {
				state.isLoading = false
				state.isError = false
			})
			.addCase(changePassword.rejected, (state) => {
				state.isLoading = false
				state.isError = true
			})
			.addCase(unsubscribe.pending, (state) => {
				state.isLoading = true
			})
			.addCase(unsubscribe.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(unsubscribe.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(smartActive.pending, (state) => {
				state.isLoading = true
			})
			.addCase(smartActive.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(smartActive.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(promoCode.pending, (state) => {
				state.isLoading = true
			})
			.addCase(promoCode.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(promoCode.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const settingsAC = settingsSlice.actions

export const { reducer } = settingsSlice
