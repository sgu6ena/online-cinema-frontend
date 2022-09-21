import {createAsyncThunk} from "@reduxjs/toolkit";

import {PortalService} from "../../api/portal.service";
import {toastError} from "../../utils/toast-error";


export const getParameters = createAsyncThunk<string, string>(
	'/getUrlByID', async (fileId, thunkApi) => {
	try {
		const response = await PortalService.getUrl(fileId)
		return response.data
	} catch (error) {
		toastError(error)
		return thunkApi.rejectWithValue(error)
	}
})
