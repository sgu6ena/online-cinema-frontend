import Cookies from 'js-cookie'

import {IAuthResponse, ITokens} from '../../store/user/user.interface'

export const saveTokensStorage = (data: ITokens) => {
    Cookies.set('token', data.token)
    // Cookies.set('refreshToken', data.refreshToken)
}

export const saveToStorage = (data: IAuthResponse) => {
    saveTokensStorage(data)
    localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
    Cookies.remove('token')
    // Cookies.remove('refreshToken')
}
