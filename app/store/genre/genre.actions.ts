import { createAsyncThunk } from '@reduxjs/toolkit'

import { IParams, PortalService } from '../../api/portal.service'
import { toastError } from '../../utils/toast-error'


export const getGenreById = createAsyncThunk<any, { genreId: string, params: IParams }>(
	'genres/getUrlByID', async ({ genreId, params }, { getState, rejectWithValue }) => {
		try {
			if (genreId) {
				const response = await PortalService.getCategory(genreId, params)
				return { movies: response.data.data, genreId, page:params.page }
			} else {
				return { movies: [], genreId: '', page: '1' }
			}
		} catch (error) {
			toastError(error)
			return rejectWithValue(error)
		}
	})
