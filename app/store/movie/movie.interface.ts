import { IMoviePortal, IMoviePortalFull } from '../../shared/types/movie.types'

export interface IMovieState {
	movie: IMoviePortalFull | null
	isLoading: boolean
	collection: IMoviePortal[]
	isFavorite: boolean
	isFavoriteLoading: boolean
}
