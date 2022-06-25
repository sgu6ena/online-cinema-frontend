import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {initialState} from "./video.interface";

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
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload
        },
    },
})

export const videoAC = videoSlice.actions;

export const {reducer} = videoSlice
