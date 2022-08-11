import { createSlice } from '@reduxjs/toolkit'


import { sendSMS } from './settings.actions'
import { initialState } from './settings.interface'

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(sendSMS.pending, (state) => {
				state.isLoading = true
			})
			.addCase(sendSMS.fulfilled, (state, { payload }) => {
				state.isLoading = false
			})
			.addCase(sendSMS.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const { reducer } = settingsSlice
