import { createAsyncThunk } from '@reduxjs/toolkit'

import { PortalService } from '../../api/portal.service'
import { toastError } from '../../utils/toast-error'


export const getGenreById = createAsyncThunk<any, { genreId: string, page: string }>(
	'genres/getUrlByID', async ({ genreId, page }, { getState, rejectWithValue }) => {
		try {
			if (genreId) {
				const response = await PortalService.getCategory(genreId, page)
				return { movies: response.data.data, genreId, page }
			} else {
				return { movies: [], genreId: '', page: '1' }
			}
		} catch (error) {
			toastError(error)
			return rejectWithValue(error)
		}
	})
