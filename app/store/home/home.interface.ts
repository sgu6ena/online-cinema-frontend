import { ISlide } from '@/ui/slider/slider.interface'
import { IGalleryHome } from '@/ui/gallery/gallery.interface'
import { IMainGenres } from '@/shared/types/movie.types'

export interface IMainState{
	isLoading: boolean
	slides:ISlide[]
	collections:IGalleryHome[]
	genres:IMainGenres[]
	genresCollections:IGalleryHome[]
}
export const initialState:IMainState = {
	isLoading: false,
	slides:[],
	collections:[],
	genresCollections:[],
	genres:[]
}