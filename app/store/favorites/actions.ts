import {createAsyncThunk} from "@reduxjs/toolkit";

import {PortalService} from "../../api/portal.service";
import {toastError} from "../../utils/toast-error";


export const getBookmarks = createAsyncThunk<any, any>(
	'/getBookmarks', async ( thunkApi) => {
	try {
		const response = await PortalService.getBookmarks()
		return response.data
	} catch (error) {
		toastError(error)
		return thunkApi.rejectWithValue(error)
	}
})
