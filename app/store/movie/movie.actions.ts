import { createAsyncThunk } from '@reduxjs/toolkit'

import { toastError } from '../../utils/toast-error'
import { PortalMovieService } from '../../api/portalMovie.service'
import { IMoviePortalFull, IVotePortal } from '../../shared/types/movie.types'
import { toast } from 'react-hot-toast'


export const getMovie = createAsyncThunk<{ movie: IMoviePortalFull, collection: any, isFavorite: boolean , vote:IVotePortal}, string>(
	'movies/getByID',
	async (movieId, thunkApi,
	) => {
		try {
			const response = await PortalMovieService.getById(movieId)
			const movie = response.data
			const collection = response.data.list[0].items
			const isFavorite = response.data.is_favorite
			return { movie, collection, isFavorite, vote: response.data.vote }
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)


export const favorites = createAsyncThunk<any, any>(
	'movies/favorites',
	async (movieId, thunkApi,
	) => {
		try {
			const response = await PortalMovieService.sendBookmark(movieId)
			const fav = response.data.active
			toast.success(fav ? 'Добавлено в избранное' : 'Удалено из избранного', {
				style: {
					borderRadius: '10px',
					background: '#333',
					color: '#fff',
				},
			})
			return response.data.active
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)


export const voting = createAsyncThunk<any, { movieId: string, vote: number }>(
	'movies/vote',
	async ({ movieId, vote }, thunkApi,
	) => {
		try {
			const response = await PortalMovieService.sendVote(movieId, vote)
			return response.data
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	},
)

