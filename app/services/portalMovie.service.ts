import axios, { axiosClassicPortal } from '../api/interceptors'
import { getMovieUrl } from '../config/api-portal.config'
import { IMoviePortalPage } from '../shared/types/movie.types'

export const PortalMovieService = {
	async getById(id: string) {
		const data = await axiosClassicPortal.get<IMoviePortalPage>(
			getMovieUrl(`${id}`)
		)

		return data.data
	},
	async getUrl(id: string) {
		const data = await axios.get(getMovieUrl(`url/${id}`))
		return data.data
	},

	async getSearch(str: string) {
		const data = await axiosClassicPortal.get(
			getMovieUrl(`find/12?id_sort=8&pid=all&query=${str}`)
		)
		return data.data
	},
}
