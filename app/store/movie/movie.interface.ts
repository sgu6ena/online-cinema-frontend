import {
	IMoviePortal,
	IMoviePortalFull,
	IVotePortal,
} from '../../shared/types/movie.types'

export interface IMovieState {
	movie: IMoviePortalFull | null
	isLoading: boolean
	collection: IMoviePortal[]
	isFavorite: boolean
	isFavoriteLoading: boolean
	vote: IVotePortal
	myVote: 0 | 1 | 2 | 3
	isVoteLoading: boolean
	title: string
}

export const initialState: IMovieState = {
	isLoading: false,
	movie: null,
	collection: [],
	isFavorite: false,
	isFavoriteLoading: false,
	vote: {
		dislike: 0,
		ats: 0,
		like: 0,
	},
	myVote: 0,
	isVoteLoading: false,
	title: '',
}
