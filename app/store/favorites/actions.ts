import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

import { PortalService } from '../../api/portal.service'
import { IMoviePortal } from '@/shared/types/movie.types'
import { toastError } from '@/utils/toast-error'
import { TypeRootState } from '../store'

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

			return { active: response.data.active, id: movieId }
		} catch (error) {
			toastError('Вы должны войти для добавления в избранное')
			return thunkApi.rejectWithValue(error)
		}
	},
)

export const getFavoritesIds = createAsyncThunk(
	'/getFavoritesIds',
	async (_, thunkApi) => {
		try {
			const state = thunkApi.getState() as TypeRootState
			if (state.user == null) {
				return
			} else if (state.favorites.favoritesId.length > 0) {
				return state.favorites.favoritesId
			} else {
				const response = await PortalService.getBookmarks()
				return response.data.map((item: IMoviePortal) => item.id)
			}
		} catch (error) {
			console.log(error)
		}
	},
)

export const getFavorites = createAsyncThunk<any, { page:string }>(
	'/getFavorites',
	async ({ page }, thinkApi) => {
		try {
			const response = await PortalService.getBookmark(page)
			return response
		} catch (error) {

		}
	})