import { createSlice } from '@reduxjs/toolkit'

import { getMovie, voting } from './movie.actions'
import { initialState } from './movie.interface'
import { favorites } from '../favorites/actions'

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getMovie.pending, (state) => {
				state.isLoading = true
				state.movie = null
				state.collection = initialState.collection
			})
			.addCase(
				getMovie.fulfilled,
				(state, { payload: { movie, collection, isFavorite, vote } }) => {
					state.isLoading = false
					state.movie = movie
					state.collection = collection
					state.isFavorite = isFavorite
					state.vote = vote
					state.myVote = movie.my_vote
				}
			)
			.addCase(getMovie.rejected, (state) => {
				state.isLoading = false
				state.movie = null
				state.collection = initialState.collection
			})
			.addCase(favorites.pending, (state) => {
				state.isFavoriteLoading = true
			})
			.addCase(favorites.rejected, (state) => {
				state.isFavoriteLoading = false
			})
			.addCase(favorites.fulfilled, (state, { payload }) => {
				state.isFavoriteLoading = false
				state.isFavorite = payload.active
			})
			.addCase(voting.pending, (state) => {
				state.isVoteLoading = true
			})
			.addCase(voting.rejected, (state) => {
				state.isVoteLoading = false
			})
			.addCase(voting.fulfilled, (state, { payload }) => {
				state.isVoteLoading = false
				state.vote = payload.vote
				state.myVote = payload.myVote
			})
	},
})
export const { reducer } = movieSlice
