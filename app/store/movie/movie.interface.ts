import { IMoviePortal, IMoviePortalFull, IVotePortal } from '../../shared/types/movie.types'

export interface IMovieState {
	movie: IMoviePortalFull | null
	isLoading: boolean
	collection: IMoviePortal[]
	isFavorite: boolean
	isFavoriteLoading: boolean
	vote: IVotePortal
	myVote: 0 | 1 | 2 | 3
	isVoteLoading: boolean
}
