import * as process from 'process'

//export const API_URL = `${process.env.APP_URL}/api`
//export const APP_URL_PORTAL = process.env.REACT_APP_URL_PORTAL
//export const APP_URL_PORTAL = `https://api.portal.idc.md/api`
export const APP_URL_PORTAL = `https://api-dev.portal.idc.md/api`
export const getCategoryUrl = (string: string) => `/file/category/${string}`
export const getMovieUrl = (string: string) => `/file/${string}`
export const sendBookmarkUrl = (string: string) => `/bookmark/change/${string}`
export const sendVoteUrl = (id: string, vote: number) => `/like/${id}/${vote}`
export const getUserDataUrl = () => `/getUserProfile`

export const getAuthUrl = (string: string) => `/${string}`
export const recoveryEmail = () => '/v2/recovery/email'
export const recoveryPhone = () => '/v2/recovery/phone'
export const logout = () => `/logout`
export const getUserProfile = () => '/getUserProfile'
export const getGenresUrl = (string: string | number) => `/genres/${string}`
export const getMoviesUrl = (string: string) => `/movies/${string}`
export const sendSMS = () => '/sendSMS'
export const checkSMS = () => '/checkSMS'
export const changePass = () => '/updatePassword'
export const changePhoneV2 = () => '/v2/update/phone'
export const changePhoneV2Conf = () => '/v2/update/phone/conf'
export const changeEmailV2 = () => '/v2/update/email'
export const changeEmailV2Conf = () => '/v2/update/email/conf'

export const getSubscription = () => '/v2/subscriptions'
export const sendSMSV2 = () => '/v2/sendSMS'
export const checkInternetV2 = () => '/v2/checkinternet'
export const checkSMSV2 = () => '/v2/checkSMS'

export const changeEmail = () => '/updateEmail'
export const unsubscribe = () => '/unsubscription'
export const unsubscription = () => '/v2/unsubscription'

export const unflow = () => '/v2/unflow'
export const smartTv = (code: string) => `/smartTV/active/${code}`
export const activateRegister = (code: string) => `/activate?actkey=${code}`
export const recoveryPassword = (code: string) => `/get_pass/${code}`
export const activatePromoCode = (code: string) => `/promocode/${code}`
export const percentageViewed = (link_id: string, percent: number) => `/file/timeshift/${link_id}/${percent}`

