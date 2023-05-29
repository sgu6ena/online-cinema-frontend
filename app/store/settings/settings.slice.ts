import { createSlice } from '@reduxjs/toolkit'

import {
	changePassword, checkSMS,
	promoCode,
	sendSMS,
	smartActive,
	unsubscribe,
	changePhone, changeEmail,
} from './settings.actions'
import { initialState } from './settings.interface'


export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		resetIsCodeChangeEmailSend(state) {
			state.isError = false
			state.isCodeChangeEmailSend = false
		},
		resetIsCodeChangePhoneSend(state) {
			state.isError = false
			state.isCodeChangePhoneSend = false
		},
		resetIsSendSms(state) {
			state.isError = false
			state.isSmsSend = false
		},
		resetIsPromoAvailable(state) {
			state.isPromoAvailable = false
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
				state.isError=false
				state.isLoading = true
			})
			.addCase(smartActive.fulfilled, (state) => {
				state.isError=false
				state.isLoading = false
			})
			.addCase(smartActive.rejected, (state) => {

				state.isLoading = false
			})
			.addCase(checkSMS.pending, (state) => {
				state.isLoading = true
			})
			.addCase(checkSMS.fulfilled, (state) => {
				state.isLoading = false
				state.isError = false
				state.isPayed = true
			})
			.addCase(checkSMS.rejected, (state, payload) => {
				state.error = payload.payload as string
				state.isError = true
				state.isLoading = false
				if (payload.payload === 'промо недоступен')
					state.isPromoAvailable = false
			})
			.addCase(changePhone.pending, (state) => {
				state.isLoading = true
			})
			.addCase(changePhone.fulfilled, (state) => {
				state.isLoading = false
				state.isCodeChangePhoneSend = true
			})
			.addCase(changePhone.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(changeEmail.pending, (state) => {
				state.isLoading = true
			})
			.addCase(changeEmail.fulfilled, (state) => {
				state.isLoading = false
				state.isCodeChangeEmailSend = true
			})
			.addCase(changeEmail.rejected, (state) => {
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
