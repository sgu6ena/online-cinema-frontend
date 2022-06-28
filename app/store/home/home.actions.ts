import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastError } from '../../utils/toast-error'
import { PortalService } from '../../api/portal.service'
import { ISlide } from '../../components/ui/slider/slider.interface'
import { IGalleryHome } from '../../components/ui/gallery/gallery.interface'
import { IGenre, IMainGenres } from '../../shared/types/movie.types'

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
		const  response = await PortalService.getMain()
		// @ts-ignore
		return {
			slides:response.slider,
			// @ts-ignore
			collections:response.collections.filter((item)=>item.cid>100),
			// @ts-ignore
			genresCollections:response.collections.filter((item)=>item.cid<100),
			genres:response.genres
		}
	} catch (error) {
		toastError(error)
		return thunkApi.rejectWithValue(error)
	}
})
