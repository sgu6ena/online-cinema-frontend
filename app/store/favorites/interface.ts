import { IMoviePortal, IPagination } from '../../shared/types/movie.types'

export interface IState {
	isLoading: boolean
	movies: IMoviePortal[]
	pagination: IPagination | null
	favoritesId: string[]
}

export const initialState: IState = {
	isLoading: false,
	movies: [],
	pagination: null,
	favoritesId: [],
}