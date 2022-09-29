export interface IState{
	isLoading: boolean
	favoritesId:string[]
}
export const initialState:IState = {
	isLoading: false,
	favoritesId:[]
}