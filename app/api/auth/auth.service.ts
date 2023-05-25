import Cookies from 'js-cookie'

import { IRecoveryInput } from '@/screens/auth/auth.interface'
import {
	getAuthUrl,
	getUserProfile,
	logout,
	recoveryEmail, recoveryPhone,
} from '@/config/api.config'
import {
	IAuthResponse,
	IRecoveryResponse,
  IRegisterByEmail, IRegisterByMobile,
	ITokens,
} from '@/store/user/user.interface'
import axios, { axiosClassic } from '../interceptors'

import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async registerEmail(email: string) {
		const response = await axiosClassic.post<IRegisterByEmail, IAuthResponse>(
			getAuthUrl('v2/register/mail'),
			{
				email,
			},
		)
		return response
	},

	async registerMobile(phone: string) {
		const response = await axiosClassic.post<IRegisterByMobile, IAuthResponse>(
			getAuthUrl('v2/register/phone'),
			{
				phone,
			},
		)
		return response
	},

	async login(login: string, password: string) {
		const response = await axiosClassic.post<ITokens>('/v2/get_token', {
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
			recoveryEmail(),
			{
				email,
			},
		)
		return response
	},

	async recoveryByPhone(phone: string) {
		const response = await axiosClassic.post<IRecoveryInput, IRecoveryResponse>(
			recoveryPhone(),
			{
				phone,
			},
		)
		return response
	},

}
