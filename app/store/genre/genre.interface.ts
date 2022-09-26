import { IMoviePortal } from '../../shared/types/movie.types'
import { IParams } from '../../api/portal.service'

export interface IState {
	isLoading: boolean
	movies: IMoviePortal[]
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
	params: {},
	sortAvailable: false,
	totalPages:0
}