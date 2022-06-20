import { createSlice } from '@reduxjs/toolkit'

import { favorites, getMovie } from './movie.actions'
import { IMovieState } from './movie.interface'

const initialState: IMovieState = {
	isLoading: false,
	movie: null,
	collection: [],
	isFavorite: false,
	isFavoriteLoading: false,
}

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getMovie.pending, (state) => {
				state.isLoading = true
				state.movie = null
				state.collection = []
			})
			.addCase(getMovie.fulfilled, (state, { payload: { movie, collection, isFavorite } }) => {
				state.isLoading = false
				state.movie = movie
				state.collection = collection
				state.isFavorite = isFavorite
			})
			.addCase(getMovie.rejected, (state) => {
				state.isLoading = false
				state.movie = null
				state.collection = []
			})
			.addCase(favorites.pending, (state) => {
				state.isFavoriteLoading = true
			})
			.addCase(favorites.rejected, (state) => {
				state.isFavoriteLoading = false

			})
			.addCase(favorites.fulfilled, (state,{payload}) => {
				state.isFavoriteLoading = false
				state.isFavorite = payload
			})
	},
})
export const { reducer } = movieSlice
