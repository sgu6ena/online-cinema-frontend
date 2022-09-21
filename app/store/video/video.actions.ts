import { createAsyncThunk } from '@reduxjs/toolkit'

import { PortalService } from '../../api/portal.service'
import { toastError } from '../../utils/toast-error'

export const getUrl = createAsyncThunk<string, string>(
	'video/getUrlByID',
	async (fileId, thunkApi) => {
		try {
			const response = await PortalService.getUrl(fileId)
			return response.data.url
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)
