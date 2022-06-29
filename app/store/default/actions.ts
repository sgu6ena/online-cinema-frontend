import {createAsyncThunk} from "@reduxjs/toolkit";

import {PortalMovieService} from "../../api/portalMovie.service";
import {toastError} from "../../utils/toast-error";


export const getParameters = createAsyncThunk<string, string>(
	'/getUrlByID', async (fileId, thunkApi) => {
	try {
		const response = await PortalMovieService.getUrl(fileId)
		return response.data
	} catch (error) {
		toastError(error)
		return thunkApi.rejectWithValue(error)
	}
})
