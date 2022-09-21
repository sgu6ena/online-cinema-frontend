import axios from 'axios'
import Cookies from 'js-cookie'

import { APP_URL_PORTAL } from '../config/api.config'

import { errorCatch, getContentType } from './api.helperts'

export const axiosClassic = axios.create({
	baseURL: APP_URL_PORTAL,
	headers: getContentType(),
})

export const axiosClassicPortal = axios.create({
	baseURL: APP_URL_PORTAL,
	headers: getContentType(),
})
export const instance = axios.create({
	baseURL: APP_URL_PORTAL,
	headers: getContentType(),
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('atp')
	if (config.headers && accessToken) {
		config.headers['HTTP-X-TOKEN'] = `${accessToken}`
	}
	return config
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		throw errorCatch(error)
	},
)

export default instance
