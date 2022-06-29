import {createAsyncThunk} from "@reduxjs/toolkit";


import {toastError} from "../../utils/toast-error";
import { PortalService } from '../../api/portal.service'

export const getSearchParameters = createAsyncThunk(
	'search/getSearchParameters', async (arg, thunkAPI) => {
	try {
		const response = await PortalService.getListFilter()
		return response.data
	} catch (error) {
		toastError(error)
	}
})
