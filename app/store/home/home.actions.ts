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
		genresCollections:IMainGenres[]
		genres:IGenre[]
	}, void
	>('home/getMainHome', async (_, thunkApi) => {
	try {
		const  response = await PortalService.getMain()
		return {
			slides:response.slider,
			collections:response.collections.filter((item:IGalleryHome)=>item.cid>100),
			genresCollections:response.collections.filter((item:IGalleryHome)=>item.cid<100),
			genres:response.genres
		}
	} catch (error) {
		toastError(error)
		return thunkApi.rejectWithValue(error)
	}
})
