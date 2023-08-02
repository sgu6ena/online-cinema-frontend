import { createAsyncThunk } from '@reduxjs/toolkit'

import { IParams, PortalService } from '../../api/portal.service'
import { toastError } from '@/utils/toast-error'


export const getGenreById = createAsyncThunk<any, { genreId: string, params: IParams }>(
	'genres/getUrlByID', async ({ genreId, params }, { getState, rejectWithValue }) => {
		try {
			if (genreId) {
				const response = await PortalService.getCategory(genreId, { page:params.page, id_sort:params.id_sort, year:params.year })
				return { movies: response.data.data.items, genreId, page: params.page, pagination: response.data.pagination, title:response.data.data.title }
			} else {
				return { movies: [], genreId: '', page: params.page }
			}
		} catch (error) {
			toastError(error)
			return rejectWithValue(error)
		}
	})
