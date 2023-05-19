import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastError } from '@/utils/toast-error'
import { PortalService } from '../../api/portal.service'
import { ISlide } from '@/ui/slider/slider.interface'
import { IGalleryHome } from '@/ui/gallery/gallery.interface'
import {  IMainGenres } from '@/shared/types/movie.types'
import { TypeRootState } from '../store'

export const getMainHome = createAsyncThunk<
	{
		slides:ISlide[]
		collections:IGalleryHome[]
		genresCollections:IGalleryHome[]
		genres:IMainGenres[]
	}, void
	// @ts-ignore
	>('home/getMainHome', async (_, thunkApi) => {
	try {
		const state = thunkApi.getState() as TypeRootState
		if(state.home.collections.length>0) {
			return state.home
		}
		const  response = await PortalService.getMain()
		return {
			slides:response.slider,
			collections:response.collections.filter((item)=>item.cid>100),
			genresCollections:response.collections.filter((item)=>item.cid<100),
			genres:response.genres
		}
	} catch (error) {
		toastError(error)
		return thunkApi.rejectWithValue(error)
	}
})
