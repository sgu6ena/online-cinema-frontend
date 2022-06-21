import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IInitialState {
	serial: boolean
	url: string
	title: string
	isPlayed: boolean
	idFile: string
}

const initialState: IInitialState = {
	serial: false,
	url: '',
	title: '',
	idFile: '',
	isPlayed: false,
}

export const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		setIdFile(state, action: PayloadAction<string>) {
				state.idFile = action.payload
		},
		setPlay(state, action: PayloadAction<boolean>) {
			state.isPlayed = action.payload
		},
	},
})

export const videoAC = videoSlice.actions;

export const { reducer } = videoSlice
