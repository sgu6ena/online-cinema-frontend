import { createAsyncThunk } from '@reduxjs/toolkit'

import { IParams, PortalService } from '../../api/portal.service'
import { toastError } from '../../utils/toast-error'


export const getGenreById = createAsyncThunk<any, { genreId: string, params: IParams }>(
	'genres/getUrlByID', async ({ genreId, params }, { getState, rejectWithValue }) => {
		try {
			if (genreId) {
				const response = await PortalService.getSearchWithFilter('', +genreId < 100 ? genreId : '', '', '', params.year, params.id_sort as string, genreId, params.page || 1)
				return { movies: response.data, genreId, page: params.page, pagination: response.pagination }
			} else {
				return { movies: [], genreId: '', page: params.page }
			}
		} catch (error) {
			toastError(error)
			return rejectWithValue(error)
		}
	})
