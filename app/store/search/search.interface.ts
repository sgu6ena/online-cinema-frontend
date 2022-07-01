import { IFilter, IListFilter } from '../../shared/types/seaarch.types'
import { IMoviePortal, IMoviePortalPerPage, IPagination } from '../../shared/types/movie.types'

export interface ISearchState extends IFilter {
	isLoading: boolean
	// data:IMoviePortalPerPage
	movies: IMoviePortal[]
	pagination: IPagination

}

export const initialState: ISearchState = {
	isLoading: false,
	category: [],
	country: [],
	genre: [],
	sort: [],
	type_content: [],
	year: [],


	movies: [],
	pagination: {
		count: 0,
		total: 0,
		perPage: 0,
		currentPage: 0,
		totalPages: 0,
		links: {},
	}
}