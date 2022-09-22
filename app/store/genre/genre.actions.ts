import {createAsyncThunk} from "@reduxjs/toolkit";

import {PortalService} from "../../api/portal.service";
import {toastError} from "../../utils/toast-error";


export const getGenreById = createAsyncThunk<any, {genreId:string, page:string}>(
	'genres/getUrlByID', async ({ genreId, page }, thunkApi) => {
	try {
		const response = await PortalService.getCategory(genreId, page)
		return response.data
	} catch (error) {
		toastError(error)
		return thunkApi.rejectWithValue(error)
	}
})
