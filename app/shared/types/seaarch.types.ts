export interface IList {
	id: number
	name: string
}
export interface IFilter{
	category: IList[]
	country: IList[]
	genre: IList[]
	sort: IList[]
	type_content: IList[]
	year: IList[]
}
export interface IListFilter {
	data: IFilter
}
