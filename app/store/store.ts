import { configureStore } from '@reduxjs/toolkit'

import { reducers } from './rootReduser'

export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	}),
	devTools: true,
})

export type TypeRootState = ReturnType<typeof store.getState>
