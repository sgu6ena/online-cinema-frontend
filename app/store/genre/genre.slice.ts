import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './genre.interface'
import { getGenreById } from './genre.actions'

export const GenreSlice = createSlice({
	name: 'genre',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getGenreById.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getGenreById.fulfilled, (state, { payload }) => {
				state.movies=[...state.movies,...payload.data.items]
				state.isLoading = false
			})
			.addCase(getGenreById.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const { reducer } = GenreSlice
