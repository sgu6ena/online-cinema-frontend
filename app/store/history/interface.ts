import { IMoviePortal, IPagination } from '../../shared/types/movie.types'

export interface IState {
	isLoading: boolean
	movies: IMoviePortal[]
	pagination: IPagination | null

}

export const initialState: IState = {
	isLoading: false,
	movies: [],
	pagination: null,
}