import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './interface'
import { favorites, getFavorites, getFavoritesIds } from './actions'
import { getSearch } from '../search/search.actions'

export const FavoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getFavoritesIds.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getFavoritesIds.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.favoritesId = payload
			})
			.addCase(getFavoritesIds.rejected, (state) => {
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
				state.favoritesId = payload.active ? [...state.favoritesId, payload.id] : [...state.favoritesId.filter(item => item !== payload.id)]
			})
			.addCase(getFavorites.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getFavorites.fulfilled, (state, { payload }) => {
				state.isLoading = false
				if (payload.pagination.currentPage!=1){
					state.movies = [...state.movies, ...payload.data]
				} else{
					state.movies = payload.data
				}
				state.favoritesId = Array.from (new Set([...state.favoritesId, ...payload.data.map((item:any)=>item.id)]))
				state.pagination = payload.pagination
			})
			.addCase(getFavorites.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const { reducer } = FavoritesSlice
