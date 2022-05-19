import Cookies from 'js-cookie'


import axios, { axiosClassic } from '../../api/interceptors'
import { getAuthUrl, getUserProfile } from '../../config/api.config'
import { IAuthResponse, ITokens } from '../../store/user/user.interface'

import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async register(email: string, password: string, login: string) {
		const response = await axiosClassic.post<ITokens>(getAuthUrl('get_token'), {
			login,
			email,
			password,
		})    // @ts-ignore
		const token = response.data.data.token
		Cookies.set('token', token)
		const user = token ? await axios.get<IAuthResponse>(getUserProfile()) : null    // @ts-ignore
		const res = { user: user?.data?.data, token }
		saveToStorage(res)
		return res
	},
	async login(login: string, password: string) {
		const response = await axiosClassic.post<ITokens>(getAuthUrl('get_token'), {
			login,
			password,
		})    // @ts-ignore
		const token = response.data.data.token
		Cookies.set('token', token)
		const user = token ? await axios.get<IAuthResponse>(getUserProfile()) : null    // @ts-ignore
		const res = { user: user?.data?.data, token }
		saveToStorage(res)
		return res
	},

	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},
}
