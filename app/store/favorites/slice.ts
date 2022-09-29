import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './interface'
import { favorites, getFavorites } from './actions'

export const FavoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getFavorites.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getFavorites.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.favoritesId = payload
			})
			.addCase(getFavorites.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(favorites.pending, (state) => {
				state.isLoading = true
			})
			.addCase(favorites.rejected, (state) => {
				state.isLoading = false
			})
			.addCase(favorites.fulfilled, (state, { payload }) => {
				state.isLoading = false

				state.favoritesId = payload.active ? [...state.favoritesId,payload.id]:[...state.favoritesId]
			})
	},
})

export const { reducer } = FavoritesSlice
