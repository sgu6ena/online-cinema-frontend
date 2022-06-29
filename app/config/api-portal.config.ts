export const APP_URL_PORTAL = `//api.portal.idc.md/api`

export const getCategoryUrl = (string: string) => `/file/category/${string}`
export const getMovieUrl = (string: string) => `/file/${string}`
export const sendBookmarkUrl = (string: string) => `/bookmark/change/${string}`
export const sendVoteUrl = (id: string, vote: number) => `/like/${id}/${vote}`
