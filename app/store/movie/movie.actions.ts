import { createAsyncThunk } from '@reduxjs/toolkit'

import { toastError } from '../../utils/toast-error'
import { PortalMovieService } from '../../api/portalMovie.service'
import { IMoviePortalFull } from '../../shared/types/movie.types'


export const getMovie = createAsyncThunk<{ movie:IMoviePortalFull, collection:any },string>(
	'movies/getByID',
	async (movieId , thunkApi
	) => {
		try {
			const response = await PortalMovieService.getById(movieId)
			const  movie= response.data
			const collection = response.data.list[0].items
			return { movie, collection }
		} catch (error) {
			console.log('ошибка',error)
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)

