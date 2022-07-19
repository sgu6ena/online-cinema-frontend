import {createSlice} from '@reduxjs/toolkit'

import {getSearch, getSearchParameters} from './search.actions'
import {initialState} from './search.interface'

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchParameters.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getSearchParameters.fulfilled,
        (
          state,
          {payload: {country, year, type_content, sort, genre, category}}
        ) => {
          state.isLoading = false
          state.country = country
          state.year = year
          state.type_content = type_content
          state.sort =  sort
          state.genre = genre
          state.category = category
        }
      )
      .addCase(getSearchParameters.rejected, (state) => {
        state.isLoading = false
      })

      .addCase(getSearch.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getSearch.fulfilled,
        (
          state,
          {payload}
        ) => {
          state.isLoading = false
          //@ts-ignore
          state.movies = payload.data
          state.pagination = payload.pagination
        }
      )
      .addCase(getSearch.rejected, (state) => {
        state.isLoading = false
      })

  },
})

export const {reducer} = searchSlice
