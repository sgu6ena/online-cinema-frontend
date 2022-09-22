import { createAsyncThunk } from '@reduxjs/toolkit'

import { PortalService } from '../../api/portal.service'
import { IMoviePortalPerPage } from '../../shared/types/movie.types'
import { IFilter } from '../../shared/types/search.types'
import { toastError } from '../../utils/toast-error'

export const getSearchParameters = createAsyncThunk<IFilter, void>(
	'search/getSearchParameters',
	async (arg, thunkApi) => {
		try {
			const response = await PortalService.getListFilter()
			return (
				{
					category: response.data.category,
					country: response.data.country,
					genre: response.data.genre,
					sort: response.data.sort,
					type_content: response.data.type_content,
					year: response.data.year,
				} || []
			)
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const getSearch = createAsyncThunk<
	IMoviePortalPerPage,
	{
		title: string
		category: string
		country: string
		genre: string
		sort: string
		type_content: string
		year: string
		page: string
	}
>('search/getSearch', async (params, thunkApi) => {
	try {
		const response = await PortalService.getSearchWithFilter(
			params.title,
			params.genre,
			params.country,
			params.type_content,
			params.year,
			params.sort,
			params.category,
			params.page.toString()
		)
		return response
	} catch (error) {
		toastError(error)
		return thunkApi.rejectWithValue(error)
	}
})
