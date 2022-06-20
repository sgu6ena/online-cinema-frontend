export const APP_URL_PORTAL = `https://api.portal.idc.md/api`

export const getCategoryUrl = (string: string) => `/file/category/${string}`
export const getMovieUrl = (string: string) => `/file/${string}`
export const sendBookmarkUrl = (string:string)=>`/bookmark/change/${string}`
export const sendVoteUrl = (id:string, vote:number)=>`/like/${id}/${vote}`
//
// export const getUserUrl = (string: string) => `/users/${string}`
// export const getMoviesUrl = (string: string) => `/movies/${string}`
// export const getActorUrl = (string: string) => `/actors/${string}`
// export const getRatingUrl = (string: string) => `/ratings/${string}`
//
// export const getAuthUrl = (string: string) => `/auth/${string}`
