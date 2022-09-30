import { createSlice } from '@reduxjs/toolkit'

import { getMovie, voting } from './movie.actions'
import { initialState } from './movie.interface'
import { settingsSlice } from '../settings/settings.slice'


export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		toggleFavorites(state){
			state.isFavorite = !state.isFavorite
		}
	},
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

export const movieAC = movieSlice.actions
export const { reducer } = movieSlice
