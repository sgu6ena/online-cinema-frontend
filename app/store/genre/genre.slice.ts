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
				if (state.genreId === payload.genreId && payload.page != '1') {
					state.movies = [...state.movies, ...payload.movies.items]
					state.genreId = payload.genreId
					state.page = payload.page

				} else {
					state.movies = payload.movies.items
					state.genreId = payload.genreId
					state.page = payload.page
				}
				state.totalPages = payload.pagination.totalPages
				state.sortAvailable = payload.movies.sortAvailable
				state.isLoading = false
				state.title = payload.movies.title
			})
			.addCase(getGenreById.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const { reducer } = GenreSlice
