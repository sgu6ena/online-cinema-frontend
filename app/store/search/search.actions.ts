import { createAsyncThunk } from '@reduxjs/toolkit'


import { toastError } from '../../utils/toast-error'
import { PortalService } from '../../api/portal.service'
import { IFilter, IList, IListFilter } from '../../shared/types/seaarch.types'

export const getSearchParameters = createAsyncThunk<IFilter, void>(
	'search/getSearchParameters', async (arg, thunkApi) => {
		try {
			const response = await PortalService.getListFilter()
			return {
				category:response.data.category,
				country: response.data.country,
				genre: response.data.genre,
				sort: response.data.sort,
				type_content: response.data.type_content,
				year: response.data.year,
			}||[]
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	})
