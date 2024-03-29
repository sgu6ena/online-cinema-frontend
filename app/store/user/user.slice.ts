import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { getStoreLocalStorage } from '@/utils/local-storage'

import {
	getUserData,
	login,
	logout,
	recovery,
	registerByMail,
	registerByMobile,
} from './user.actions'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
	isLoading: false,
	user: getStoreLocalStorage('user'),
	token: Cookies.get('atp') || typeof window !== 'undefined' ? window.localStorage.getItem('atp') || '' : '',
	isRegistered: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(registerByMail.pending, (state) => {
				state.isLoading = true
				state.isRegistered = false
			})
			.addCase(registerByMail.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
				state.isRegistered = true
			})
			.addCase(registerByMail.rejected, (state) => {
				state.isLoading = false
				state.user = null
				state.isRegistered = false
			})
			.addCase(registerByMobile.pending, (state) => {
				state.isLoading = true
				state.isRegistered = false
			})
			.addCase(registerByMobile.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
				state.isRegistered = true
			})
			.addCase(registerByMobile.rejected, (state) => {
				state.isLoading = false
				state.user = null
				state.isRegistered = false
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true
				// state.isRegistered = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
				state.isRegistered = true
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.isLoading = false
				state.user = null
				// state.isRegistered = false
			})
			.addCase(recovery.pending, (state) => {
				state.isLoading = true

			})
			.addCase(recovery.fulfilled, (state, { payload }) => {
				state.isLoading = false

			})
			.addCase(recovery.rejected, (state, { payload }) => {
				state.isLoading = false

			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
				state.isRegistered = false
			})
			.addCase(getUserData.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getUserData.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(getUserData.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload
			})
	},
})
export const { reducer } = userSlice
