import { IUserData } from '../components/screens/settings/user.interface'
import { IGalleryHome } from '../components/ui/gallery/gallery.interface'
import { ISlide } from '../components/ui/slider/slider.interface'
import { APP_URL_PORTAL, getCategoryUrl } from '../config/api-portal.config'
import {
	activatePromocode,
	changePass,
	checkSMS,
	getMoviesUrl,
	sendSMS,
	smartTv,
	unsubscribe,
} from '../config/api.config'
import { IGenrePortal, IMainGenres, IMoviePortalPerPage } from '../shared/types/movie.types'
import { IListFilter } from '../shared/types/seaarch.types'
import { IChangePassword, ICheckSms, ISendSms } from '../store/settings/settings.interface'

import axios, { axiosClassicPortal } from './interceptors'

const MOVIES_ON_PAGE = '24'

interface IMain {
	status: number
	success: boolean
	data: [...IGalleryHome[], IMainGenres]
}

export const PortalService = {
	async getAll() {
		const data = await axiosClassicPortal.get<IMoviePortalPerPage>(
			getCategoryUrl('102/60'),
		)
		return data.data.data.items
	},

	async getCategory(slug: string | undefined = '0', page = '1') {
		const data = await axiosClassicPortal.get<IMoviePortalPerPage>(
			getCategoryUrl(slug) + '/'+ MOVIES_ON_PAGE,
			{
				params: {
					page: page ? page.toString() : '1',
				},
			},
		)
		return data
	},

	async getBookmark(page: string = '1') {
		const data = await axios.get(`bookmark/`+MOVIES_ON_PAGE, {
			params: {
				page: page ? page : '1',
			},
		})
		return data.data
	},

	async getHistory(page: string = '1') {
		const data = await axios.get(`history/`+MOVIES_ON_PAGE, {
			params: {
				page: page ? page : '1',
			},
		})
		return data.data
	},
	async getMain() {
		const response = await axiosClassicPortal.get<IMain>('/main')
		const slides: ISlide[] = response.data.data[0].items.map((m: any) => ({
			_id: m.id,
			bigPoster: m.logo,
			link: getMoviesUrl(m.id),
			title: m.titles,
			subTitle: m.description,
			year: m.year,
			genres: m.genre,
			rate_age: m.rate_age,
		}))
		const genres = response.data.data.filter(
			(item) => item.viewport === 0.8 && item.title === 'Жанры',
		)
		const collections = response.data.data.filter(
			(item) => item.viewport === 0.3,
		)
		return {
			slider: slides,
			collections,
			genres,
		}
	},

	async getProfile() {
		const data = await axios.get<IUserData>('/getUserProfile')
		return data?.data.data
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
		page: string | number = '1',
	) {
		const data = await axiosClassicPortal.get(`searchExt/`+MOVIES_ON_PAGE, {
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

	async sendSms(mobile: string) {
		const response = await axios.post<any, ISendSms>(sendSMS(), {
			mobile,
		})
		return response
	},

	async checkSms(sms: string, promo: boolean) {
		const response = await axios.post<any, ICheckSms>(checkSMS(), {
			sms,
			promo,
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
	async unsubscribe() {
		const response = await axios.get<any, void>(unsubscribe())
		return response
	},
	async activateSmart(code:string) {
		const response = await axios.get<any, any>(smartTv(code))
		return response
	},
	async activatePromocode(code:string) {
		const response = await axios.get<any, any>(activatePromocode(code))
		return response
	},
}