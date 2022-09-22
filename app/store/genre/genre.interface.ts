import { IMoviePortal } from '../../shared/types/movie.types'
import { IParams } from '../../api/portal.service'

export interface IState {
	isLoading: boolean
	movies: IMoviePortal[]
	genreId: string
	page: string
	title: string
	params?: IParams
}

export const initialState: IState = {
	isLoading: false,
	title: '',
	genreId: '',
	page: '',
	movies: [],
	params: {},

}