import axios, { axiosClassic, axiosClassicPortal } from './interceptors'
import { IUserData } from '../components/screens/profile/user.interface'
import { IGalleryHome } from '../components/ui/gallery/gallery.interface'
import { APP_URL_PORTAL, getCategoryUrl, getMovieUrl } from '../config/api-portal.config'
import { IGenrePortal, IMainGenres, IMoviePortalPerPage } from '../shared/types/movie.types'
import { ISlide } from '../components/ui/slider/slider.interface'
import { getMoviesUrl } from '../config/api.config'
import { IListFilter } from '../shared/types/seaarch.types'

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

	async getCategory(
		slug: string | undefined = '0',
		page = '1',
	) {
		const data = await axiosClassicPortal.get<IMoviePortalPerPage>(
			getCategoryUrl(slug) + '/20',
			{
				params: {
					page: page ? page.toString() : '1',
				},
			},
		)
		return data
	},

	async getBookmark(page: string = '1') {
		const data = await axios.get(`bookmark/20`, {
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
		const genres = response.data.data.filter((item) => item.viewport === 0.8 && item.title === 'Жанры')
		const collections = response.data.data.filter((item) => item.viewport === 0.3)
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

	async getSearchWithFilter(query: string, type_content = '', id_sort = '', year = '', cid = '', country = '') {
		const data = await axiosClassicPortal.get(
			getMovieUrl(`find/20?id_sort=8&pid=all&query=${query}&type_content=${type_content}&id_sort=${id_sort}&year=${year}&cid=''&country=${country}`),
		)
		return data.data
	},

}
