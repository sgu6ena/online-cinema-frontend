import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {initialState} from "./video.interface";
import {getUrl} from "./video.actions";

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
        resetVideo(state) {
            state.serial = false
            state.url = ''
            state.urlLoading = false
            state.title = ''
            state.idFile = ''
            state.isPlayed = false
        }
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
            .addCase(getUrl.fulfilled, (state, {payload}) => {
                state.url = payload
                state.urlLoading = false
            })
    }
})

export const videoAC = videoSlice.actions;

export const {reducer} = videoSlice
