import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './interface'
import { getParameters } from './actions'

export const Slice = createSlice({
	name: '',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getParameters.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getParameters.fulfilled, (state, { payload }) => {
				state.isLoading = false
			})
			.addCase(getParameters.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const { reducer } = Slice
