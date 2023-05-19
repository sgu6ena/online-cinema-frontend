import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IMedia } from '@/shared/types/movie.types'

import { getUrl } from './video.actions'
import { initialState } from './video.interface'


export const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		setSerial(state, action: PayloadAction<boolean>) {
			state.serial = action.payload
		},

		setPlaylist(state, action: PayloadAction<IMedia[]>) {
			state.seasons = action.payload
			state.playlist = action.payload
				.map((season) =>
					season.items.map((item) => ({
						titleFile: item.title,
						chunk:item.chunk,
						idFile: item.file.toString(),
						seasonTitle: season.title,
						isActive: item.isActive || false,
					}))
				)
				.flat(1)
		},
		setIdFile(state, action: PayloadAction<string>) {
			state.idFile = action.payload
		},
		setPlay(state, action: PayloadAction<boolean>) {
			state.isPlayed = action.payload
		},
		setFullScreen(state, action: PayloadAction<boolean>) {
			state.fullScreen = action.payload
		},
		setTitle(state, action: PayloadAction<string>) {
			state.title = action.payload
		},
		setPercent(state, action: PayloadAction<number>) {
			state.percent = action.payload
		},
		setPercentChunk(state, action: PayloadAction<{ id: string, percent: number }>) {
			const indexSeason = state.seasons.findIndex(season => season.items.find(item => item.file.toString() === action.payload.id))
			const season = state.seasons[indexSeason]
			const indexSerial = season.items.findIndex(item => item.file.toString() === action.payload.id)
			state.seasons[indexSeason].items[indexSerial].chunk = action.payload.percent
		},
		resetVideo(state) {
			state.serial = false
			state.url = ''
			state.urlLoading = false
			state.title = ''
			state.idFile = ''
			state.isPlayed = false
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUrl.pending, (state) => {
				state.url = null
				state.urlLoading = true
			})
			.addCase(getUrl.rejected, (state) => {
				state.url = null
				state.urlLoading = false
			})
			.addCase(getUrl.fulfilled, (state, { payload }) => {
				state.url = payload
				state.urlLoading = false
			})
	},
})

export const videoAC = videoSlice.actions

export const { reducer } = videoSlice
