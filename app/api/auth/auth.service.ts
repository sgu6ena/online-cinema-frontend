import Cookies from 'js-cookie'

import { IRecoveryInput } from '../../components/screens/auth/auth.interface'
import {
	getAuthUrl,
	getUserProfile,
	logout,
	recovery,
} from '../../config/api.config'
import {
	IAuthResponse,
	IRecoveryResponse,
	IRegister,
	ITokens,
} from '../../store/user/user.interface'
import axios, { axiosClassic } from '../interceptors'

import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async register(email: string, password: string, login: string) {
		const response = await axiosClassic.post<IRegister, IAuthResponse>(
			getAuthUrl('register'),
			{
				login,
				email,
				password,
			},
		)
		return response
	},

	async login(login: string, password: string) {
		const response = await axiosClassic.post<ITokens>(getAuthUrl('get_token'), {
			login,
			password,
		}) // @ts-ignore
		const token = response.data.data.token
		Cookies.set('atp', token)
		const user = token ? await axios.get<IAuthResponse>(getUserProfile()) : null // @ts-ignore
		const res = { user: user?.data?.data, token }
		saveToStorage(res)
		return res
	},

	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
		return axios.get(logout())
	},

	async recovery(email: string) {
		const response = await axiosClassic.post<IRecoveryInput, IRecoveryResponse>(
			recovery(),
			{
				email,
			},
		)
		return response
	},
}
