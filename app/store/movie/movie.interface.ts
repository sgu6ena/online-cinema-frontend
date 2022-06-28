import {
	IMoviePortalFull,
	IVotePortal,
} from '../../shared/types/movie.types'
import { IGalleryHome } from '../../components/ui/gallery/gallery.interface'

export interface IMovieState {
	movie: IMoviePortalFull | null
	isLoading: boolean
	collection: IGalleryHome
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
	collection: {
		title:'',
		items:[],
		cid:0,
		autoplay:false,
		infinite:false,
		viewport:0
	},
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
