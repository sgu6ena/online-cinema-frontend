import { ISlide } from '../../components/ui/slider/slider.interface'
import { IGalleryHome } from '../../components/ui/gallery/gallery.interface'

export interface IMainState{
	isLoading: boolean
	slides:ISlide[]
	collections:IGalleryHome[]
	genres:IGalleryHome[]
	genresCollections:IGalleryHome[]
}
export const initialState:IMainState = {
	isLoading: false,
	slides:[],
	collections:[],
	genresCollections:[],
	genres:[]
}