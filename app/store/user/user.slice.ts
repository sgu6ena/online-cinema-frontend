import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocalStorage } from '../../utils/local-storage'

import { IInitialState } from './user.interface'

const initialState: IInitialState = {
	isLoading: false,
	user: getStoreLocalStorage('user'),
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
})
export const { reducer } = userSlice
