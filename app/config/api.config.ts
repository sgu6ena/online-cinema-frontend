export const API_URL = `${process.env.APP_URL}/api`

export const getAuthUrl = (string: string) => `/${string}`
export const getUserProfile = () => '/getUserProfile'
export const getGenresUrl = (string: string | number) => `/genres/${string}`
export const getMoviesUrl = (string: string) => `/movies/${string}`
export const sendSMS = () => '/sendSMS'
export const checkSMS = () => '/checkSMS'
export const changePass = () =>'/updatePassword'
