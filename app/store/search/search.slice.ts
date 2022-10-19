import { createSlice } from '@reduxjs/toolkit'

import { getSearch, getSearchParameters } from './search.actions'
import { initialState } from './search.interface'

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSort(state, {payload}) {
			state.currentSort = payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getSearchParameters.pending, (state) => {
				state.isLoadingFilters = true
			})
			.addCase(
				getSearchParameters.fulfilled,
				(
					state,
					{ payload: { country, year, type_content, sort, genre, category } }
				) => {
					state.isLoadingFilters = false
					state.country = country
					state.year = year
					state.type_content = type_content
					state.sort = sort
					state.genre = genre
					state.category = category
				}
			)
			.addCase(getSearchParameters.rejected, (state) => {
				state.isLoadingFilters = false
			})

			.addCase(getSearch.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getSearch.fulfilled, (state, { payload }) => {
				state.isLoading = false
				if (payload.pagination.currentPage != 1) {
					state.movies = [...state.movies, ...payload.data]
				} else {
					state.movies = payload.data
				}
				state.pagination = payload.pagination
			})
			.addCase(getSearch.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const searchAC = searchSlice.actions

export const { reducer } = searchSlice
