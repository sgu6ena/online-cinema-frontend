import { createSlice } from '@reduxjs/toolkit'
import { getSearchParameters } from './search.actions'
import { initialState } from './search.interface'

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getSearchParameters.pending,
				(state) => {
				console.log('pend')
				state.isLoading = true
			})
			.addCase(getSearchParameters.fulfilled,
				(state) => {
					console.log('fulfilled')
				state.isLoading = true
			})
			.addCase(getSearchParameters.rejected,
				(state) => {
					console.log('rejected')
				state.isLoading = true
			})
	},
})

export const { reducer } = searchSlice
