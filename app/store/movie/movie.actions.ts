import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

import { PortalService } from '../../api/portal.service'
import { IGalleryHome } from '@/ui/gallery/gallery.interface'
import { IMoviePortalFull, IVotePortal } from '@/shared/types/movie.types'
import { toastError } from '@/utils/toast-error'

export const getMovie = createAsyncThunk<
	{
		movie: IMoviePortalFull
		collection: IGalleryHome
		isFavorite: boolean
		vote: IVotePortal
	},
	string
>('movies/getByID', async (movieId, thunkApi) => {
	try {
		const response = await PortalService.getById(movieId)
		const movie = response.data
		const collection = response.data.list[0]
		const isFavorite = response.data.is_favorite
		return { movie, collection, isFavorite, vote: response.data.vote }
	} catch (error) {
		toastError(error)
		return thunkApi.rejectWithValue(error)
	}
})

export const voting = createAsyncThunk<
	{ myVote: 0 | 1 | 2 | 3; vote: IVotePortal },
	{ movieId: string; vote: number }
>('movies/vote', async ({ movieId, vote }, thunkApi) => {
	try {
		toast.success(vote > 0 ? 'Вы проголосовали' : 'Вы отменили голос', {
			icon: vote === 0 ? '🎬' : vote === 1 ? '👎' : '👍',
			style: {
				borderRadius: '10px',
				background: '#333',
				color: '#fff',
			},
		})
		const response = await PortalService.sendVote(movieId, vote)
		return response.data
	} catch (error) {
		toastError(error)
		return thunkApi.rejectWithValue(error)
	}
})
