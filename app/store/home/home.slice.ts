import { createSlice } from '@reduxjs/toolkit'

import {  getMainHome } from './home.actions'
import { initialState } from './home.interface'


export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getMainHome.pending, (state) => {
				state.isLoading = true
			})
			.addCase(
				getMainHome.fulfilled,
				(state, {payload:{slides,collections,genres}}) => {
					state.slides = slides
					state.collections = collections
					state.genres = genres
					state.isLoading = false
				},
			)
			.addCase(getMainHome.rejected, (state) => {
				state.isLoading = false
			})

	},
})


export const { reducer } = homeSlice
