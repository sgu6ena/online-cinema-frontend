import { IGalleryHome } from '@/ui/gallery/gallery.interface'
import { ISlide } from '@/ui/slider/slider.interface'
import {
	APP_URL_PORTAL,
	changeEmail,
	changeEmailV2,
	changeEmailV2Conf,
	changePhoneV2,
	changePhoneV2Conf,
	changeService,
	checkSMSV2,
	getCategoryUrl,
	getMovieUrl,
	getSubscription,
	getUserDataUrl,
	percentageViewed,
	recoveryPassword,
	sendBookmarkUrl,
	sendSMSV2,
	sendVoteUrl,
	unflow,
	unsubscription,
} from '@/config/api.config'
import {
	activatePromoCode,
	activateRegister,
	changePass,
	checkSMS,
	getMoviesUrl,
	sendSMS,
	smartTv,
	unsubscribe,
} from '@/config/api.config'
import {
	IGenrePortal,
	IMainGenres,
	IMoviePortalPage,
	IMoviePortalPerPage,
} from '@/shared/types/movie.types'
import { IListFilter } from '@/shared/types/search.types'
import {
	IChangeEmail,
	IChangePassword, IChangePhone,
	ICheckSms,
	ISendSms, ISendSmsPromo, ISubscpition,
} from '@/store/settings/settings.interface'

import axios, { axiosClassicPortal } from './interceptors'

const MOVIES_ON_PAGE = '24'

interface IMain {
	status: number
	success: boolean
	data: [...IGalleryHome[], IMainGenres]
}

export interface IParams {
	page?: string
	id_sort?: '1' | '2' | '3' | '4' | '5'
	year?: string
	category?: '20' | '39' | '100'
	country_list?: string
	genre_list?: string
}

export const PortalService = {
	async getAll() {
		const data = await axiosClassicPortal.get<IMoviePortalPerPage>(
			getCategoryUrl('102/60')
		)
		return data.data.data.items
	},

	async getCategory(
		slug: string | undefined = '0',
		{ page, id_sort, year }: IParams
	) {
		const data = await axiosClassicPortal.get<IMoviePortalPerPage>(
			getCategoryUrl(slug) + '/' + MOVIES_ON_PAGE,
			{
				params: {
					page: page ? page.toString() : '1',
					id_sort: id_sort || '1',
					year: year,
				},
			}
		)
		return data
	},

	async getBookmark(page: string = '1') {
		const data = await axios.get(`bookmark/` + MOVIES_ON_PAGE, {
			params: {
				page: page ? page : '1',
			},
		})
		return data.data
	},

	async getBookmarks() {
		const data = await axios.get(`bookmark/` + 200)
		return data.data
	},

	async getHistory(page: string = '1') {
		const data = await axios.get(`history/` + MOVIES_ON_PAGE, {
			params: {
				page: page ? page : '1',
			},
		})
		return data.data
	},
	async getMain() {
		const response = await axiosClassicPortal.get<IMain>('/main-web')
		const slides: ISlide[] = response.data.data[0].items.map((m: any) => ({
			_id: m.id,
			bigPoster: m.logo,
			link: getMoviesUrl(m.id),
			title: m.titles,
			subTitle: m.description,
			year: m.year,
			genres: m.genre,
			rate_age: m.rate_age,
			url: m.url ? m.url : null,
		}))
		const genres = response.data.data.filter(
			(item) => item.viewport === 0.8 && item.title === 'Жанры'
		)
		const collections = response.data.data.filter(
			(item) => item.viewport === 0.3
		)
		return {
			slider: slides,
			collections,
			genres,
		}
	},

	async getGenres() {
		return axios.get<IGenrePortal[]>(APP_URL_PORTAL + '/listGenre')
	},

	async getListFilter() {
		const data = await axios.get<IListFilter>(APP_URL_PORTAL + '/listFilter')
		return data?.data
	},

	async getSearchWithFilter(
		query: string,
		genre: string,
		country: string,
		type_content: string,
		year: string,
		sort: string,
		category: string,
		page: string | number
	) {
		const data = await axiosClassicPortal.get(`searchExt/` + MOVIES_ON_PAGE, {
			params: {
				query: query,
				genre: genre,
				country: country,
				year: year,
				type_content,
				page,
				cid: category,
				id_sort: sort,
			},
		})
		return data.data
	},

	async changeSubscriptions(mobile: string, service: number) {
		const response = await axios.post<any, ISendSms>(changeService(), {
			mobile, service,
		})
		return response
	},
	async sendSms(mobile: string, service: number) {
		const response = await axios.post<any, ISendSms>(sendSMSV2(), {
			mobile, service,
		})
		return response
	},
	async sendSmsPromo(mobile: string, code: string) {
		const response = await axios.post<any, ISendSmsPromo>(sendSMSV2(), {
			mobile, code,
		})
		return response
	},
	async checkSms(sms: string, service: number) {
		const response = await axios.post<any, ICheckSms>(checkSMSV2(), {
			sms,
			service,
		})
		return response
	},
	async changePass(passwordOld: string, password: string) {
		const response = await axios.post<any, IChangePassword>(changePass(), {
			passwordOld,
			password,
		})
		return response
	},

	async changePhone(phone: string) {
		const response = await axios.post<any, IChangePhone>(changePhoneV2(), {
			phone
		})
		return response
	},
	async changeEmail(email:string) {
		const response = await axios.post<any, IChangeEmail>(changeEmailV2(), {
			email,
		})
		return response
	},

	async changePhoneConf(code: string) {
		const response = await axios.post<any, IChangePhone>(changePhoneV2Conf(), {
			code
		})
		return response
	},
	async changeEmailConf(code:string) {
		const response = await axios.post<any, IChangeEmail>(changeEmailV2Conf(), {
			code,
		})
		return response
	},


	async recoveryPassword(code: string) {
		const response = await axios.get<any, any>(recoveryPassword(code))
		return response
	},
	async getSubscriptions() {
		const response = await axios.get<{ data: ISubscpition[] }>(getSubscription())
		return response.data.data
	},
	async unsubscribe() {
		const response = await axios.get<any, void>(unsubscribe())
		return response
	},
	async unsubscription() {
		const response = await axios.get<any, void>(unsubscription())
		return response
	},

	async unflow() {
		const response = await axios.get<any, void>(unflow())
		return response
	},


	async activateSmart(code: string) {
		const response = await axios.get<any, any>(smartTv(code))
		return response
	},
	async activateRegister(code: string) {
		const response = await axios.get<any, any>(activateRegister(code))
		return response
	},
	async infoPromocode(code: string) {
		const response = await axios.post<any, any>(activatePromoCode(),{ code })
		return response.data.data
	},
	async getById(id: string) {
		const data = await axios.get<IMoviePortalPage>(getMovieUrl(`${id}`))
		return data.data
	},
	async getUser() {
		const response = await axios.get(getUserDataUrl())
		return response.data
	},

	async getUrl(id: string) {
		const response = await axios.get(getMovieUrl(`url/${id}`))
		return response.data
	},

	async getSearch(str: string) {
		const data = await axiosClassicPortal.get(
			getMovieUrl(`find/12?id_sort=8&pid=all&query=${str}`)
		)
		return data.data
	},

	async sendBookmark(id: string) {
		const data = await axios.get<any>(sendBookmarkUrl(`${id}`))
		return data.data
	},

	async sendShootingPercent(idFile: string, percent:number) {
		const data = await axios.get<any>(percentageViewed(idFile, percent))
		return data.data
	},
	async sendVote(id: string, vote: number) {
		const data = await axios.get<any>(sendVoteUrl(`${id}`, vote))
		return data.data
	},

	async create() {
		return axios.post<string>(getMoviesUrl(''))
	},

	async update(_id: string, data: any) {
		return axios.put<string>(getMoviesUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},
}
