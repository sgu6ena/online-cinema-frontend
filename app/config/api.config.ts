export const API_URL = `${process.env.APP_URL}/api`

export const getAuthUrl = (string: string) => `/auth/${string}`
export const getGenresUrl = (string: string | number) => `/genres/${string}`
export const getUserUrl = (string: string) => `/users/${string}`
export const getMoviesUrl = (string: string) => `/movies/${string}`
export const getActorUrl = (string: string) => `/actors/${string}`
export const getRatingUrl = (string: string) => `/ratings/${string}`
