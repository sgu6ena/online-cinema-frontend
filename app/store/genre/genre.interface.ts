import { IMoviePortal } from '../../shared/types/movie.types'
import { IParams } from '../../api/portal.service'

export interface IState {
	isLoading: boolean
	movies: IMoviePortal[]
	pagination:any
	totalPages:number
	genreId: string
	page: string
	title: string
	sortAvailable: boolean
	params?: IParams
}

export const initialState: IState = {
	isLoading: false,
	title: '',
	genreId: '',
	page: '',
	movies: [],
	sortAvailable: false,
	totalPages:0,
	pagination:{}
}