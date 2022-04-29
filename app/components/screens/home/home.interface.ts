import { IGaleryItem } from '../../ui/galery/galery.interface'
import { ISlide } from '../../ui/slider/slider.interface'

export interface IHome {
	slides: ISlide[]
	trendingMovies: IGaleryItem[]
	actors: IGaleryItem[]
}
