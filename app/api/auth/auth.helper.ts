import Cookies from 'js-cookie'

import {IAuthResponse, ITokens} from '@/store/user/user.interface'

export const saveTokensStorage = (data: ITokens) => {
    Cookies.set('atp', data.token, { expires: new Date(9999999999999) })
}

export const saveToStorage = (data: { user: IAuthResponse, token: ITokens }) => {

    // @ts-ignore
    saveTokensStorage(data)
    localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
    Cookies.remove('atp')
}

