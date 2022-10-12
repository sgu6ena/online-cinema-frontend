export const API_URL = `${process.env.APP_URL}/api`
export const APP_URL_PORTAL = `https://api.portal.idc.md/api`

export const getCategoryUrl = (string: string) => `/file/category/${string}`
export const getMovieUrl = (string: string) => `/file/${string}`
export const sendBookmarkUrl = (string: string) => `/bookmark/change/${string}`
export const sendVoteUrl = (id: string, vote: number) => `/like/${id}/${vote}`

export const getAuthUrl = (string: string) => `/${string}`
export const logout = () => `/logout`
export const getUserProfile = () => '/getUserProfile'
export const getGenresUrl = (string: string | number) => `/genres/${string}`
export const getMoviesUrl = (string: string) => `/movies/${string}`
export const sendSMS = () => '/sendSMS'
export const checkSMS = () => '/checkSMS'
export const changePass = () =>'/updatePassword'
export const unsubscribe = () =>'/unsubscription'
export const smartTv = (code:string)=> `/smartTV/active/${code}`
export const activateRegister = (code:string)=> `/activate?actkey=${code}`
export const activatePromoCode = (code:string)=> `/promocode/${code}`
