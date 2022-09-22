import { IMoviePortal } from '../../shared/types/movie.types'

export interface IState{
	isLoading: boolean
	movies:IMoviePortal[]
	genreId:string
	page:string
	title:string
}
export const initialState:IState = {
	isLoading: false,
	genreId:'',
	page:'',
	movies:[],
	title:''
}