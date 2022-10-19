import { IMoviePortal, IPagination } from '../../shared/types/movie.types'
import { IFilter, IList } from '../../shared/types/search.types'


export interface ISearchState extends IFilter {
	isLoadingFilters: boolean
	isLoading: boolean
	movies: IMoviePortal[]
	pagination: IPagination | null
	currentSort: '1' | '2' | '3' | '4' | '5'
}

export const initialState: ISearchState = {
	isLoadingFilters: false,
	isLoading: false,
	category: [],
	country: [],
	genre: [],
	sort: [],
	currentSort: '1',
	type_content: [],
	year: [],
	movies: [],
	pagination: null,
}