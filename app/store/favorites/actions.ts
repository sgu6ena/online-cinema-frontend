import {createAsyncThunk} from "@reduxjs/toolkit";

import {PortalService} from "../../api/portal.service";
import {toastError} from "../../utils/toast-error";
import { IMoviePortal } from '../../shared/types/movie.types'
import { toast } from 'react-hot-toast'



export const favorites = createAsyncThunk<any, any>(
	'movies/favorites',
	async (movieId, thunkApi) => {
		try {
			const response = await PortalService.sendBookmark(movieId)
			const fav = response.data.active
			toast.success(fav ? 'Добавлено в избранное' : 'Удалено из избранного', {
				style: {
					borderRadius: '10px',
					background: '#333',
					color: '#fff',
				},
			})
			return { active:response.data.active, id:response.data.id }
		} catch (error) {
			toastError('Вы должны войти для добавление в избранное')
			return thunkApi.rejectWithValue(error)
		}
	}
)


export const getFavorites = createAsyncThunk(
	'/getFavorites', async () => {
	try {
		const response = await PortalService.getBookmarks()
		return response.data.map((item:IMoviePortal)=>item.id)
	} catch (error) {
		toastError(error)
	}
})
