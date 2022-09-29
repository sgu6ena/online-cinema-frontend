import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './interface'
import { getBookmarks } from './actions'

export const FavoritsSlice = createSlice({
	name: '',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getBookmarks.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getBookmarks.fulfilled, (state, { payload }) => {
				state.isLoading = false
			})
			.addCase(getBookmarks.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const { reducer } = FavoritsSlice
