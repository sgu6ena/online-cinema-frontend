import {createAsyncThunk} from "@reduxjs/toolkit";

import {PortalMovieService} from "../../api/portalMovie.service";
import {toastError} from "../../utils/toast-error";


export const getUrl = createAsyncThunk<string, string>('video/getUrlByID', async (fileId, thunkApi) => {
    try {
        const response = await PortalMovieService.getUrl(fileId)
        console.log(response.data)
        return response.data.url
    } catch (error) {
        toastError(error)
        return thunkApi.rejectWithValue(error)
    }
})
