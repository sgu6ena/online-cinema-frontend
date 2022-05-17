import Cookies from 'js-cookie'

import { getContentType } from '../../api/api.helperts'
import axios, { axiosClassic } from '../../api/interceptors'
import { getAuthUrl, getUserProfile } from '../../config/api.config'
import { IAuthResponse, ITokens } from '../../store/user/user.interface'

import {
	removeTokensStorage,
	saveToStorage,
	saveTokensStorage,
} from './auth.helper'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('register'),
			{ login: email, password }
		)
		// @ts-ignore
		if (response.data.token) {    // @ts-ignore
			saveToStorage(response.data)
		}

		return response
	},
	async login(email: string, password: string) {
		const response = await axiosClassic.post<ITokens>(getAuthUrl('get_token'), {
			login: email,
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

	async getNewTokens() {
		const token = Cookies.get('token')
		// const response = await axiosClassic.post<IAuthResponse>(
		//     getAuthUrl('access-token'),
		//     {token},
		//     {headers: getContentType()}
		// )
		//
		// if (response.data.token) {
		//     saveToStorage(response.data)
		// }

		return { data: { token } }
	},
}
