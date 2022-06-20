
import { IMoviePortal, IMoviePortalFull } from '../../shared/types/movie.types'

export interface IInitialMovieState {
	movie: IMoviePortalFull | null
	isLoading: boolean
	collection: IMoviePortal[]
}
