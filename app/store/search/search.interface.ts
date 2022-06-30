import { IFilter, IListFilter } from '../../shared/types/seaarch.types'

export interface ISearchState extends IFilter{
	isLoading: boolean

}
export const initialState:ISearchState  = {
	isLoading: false,
	category: [],
	country: [],
	genre: [],
	sort: [],
	type_content: [],
	year: [],
}