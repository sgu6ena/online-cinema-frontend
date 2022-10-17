import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './interface'
import { getHistory } from './actions'


export const HistorySlice = createSlice({
	name: 'history',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder

			.addCase(getHistory.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getHistory.fulfilled, (state, { payload }) => {
				state.isLoading = false
				if (payload.pagination.currentPage!=1){
					state.movies = [...state.movies, ...payload.data]
				} else{
					state.movies = payload.data
				}
				state.pagination = payload.pagination
			})
			.addCase(getHistory.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const { reducer } = HistorySlice
