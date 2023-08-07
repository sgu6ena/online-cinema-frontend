import { IGenre } from '../../../shared/types/movie.types'


export interface ISlide{
	id:string
	bigPoster:string
	title:string
	link: string
	subTitle?: string
	year?: string
	genres?: IGenre[]
	rate_age?:string
	url:string|null
}
