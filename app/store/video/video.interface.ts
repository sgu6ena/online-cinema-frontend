import { IMedia } from '@/shared/types/movie.types'

export interface IPlaylist {
	idFile: string
	titleFile: string
	seasonTitle: string
	isActive: boolean
	chunk:number
}

export interface IInitialState {
	serial: boolean
	idFile: string
	title: string
	isPlayed: boolean
	url: string | null
	urlLoading: boolean
	fullScreen:boolean
	playlist: IPlaylist[]
	seasons: IMedia[]
	percent: number
}

export const initialState: IInitialState = {
	serial: false,
	url: '',
	urlLoading: false,
	title: '',
	idFile: '',
	isPlayed: false,
	fullScreen:false,
	playlist: [],
	seasons: [],
	percent: 0,
}
