import { createSlice } from '@reduxjs/toolkit'

import { getMovie } from './movie.actions'
import { IInitialMovieState } from './movie.interface'

const initialState: IInitialMovieState = {
	isLoading: false,
	movie: null,
	collection: [],
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
				state.collection=[]
			})
			.addCase(getMovie.fulfilled, (state, { payload: { movie, collection } }) => {
				state.isLoading = false
				state.movie = movie
				state.collection = collection
			})
			.addCase(getMovie.rejected, (state) => {
				state.isLoading = false
				state.movie = null
				state.collection=[]
			})
	},
})
export const { reducer } = movieSlice
