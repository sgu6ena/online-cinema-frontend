import { IMoviePortal, IPagination } from '../../shared/types/movie.types';
import { IFilter } from '../../shared/types/search.types';


export interface ISearchState extends IFilter {
	isLoadingFilters: boolean
	isLoading: boolean
	movies: IMoviePortal[]
	pagination: IPagination
}

export const initialState: ISearchState = {
	isLoadingFilters: false,
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