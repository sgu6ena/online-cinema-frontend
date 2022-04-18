import axios from 'axios'

import { axiosClassic } from '../api/interceptors'
import { getGenresUrl } from '../config/api.config'
import { IActor, IGenre } from '../shared/types/movie.types'

export const GenreService = {
	async getPopularGenres() {
		return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'))
	},

	async getSearch(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getAll() {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''))
	},

	async getPortal() {
		return axios.get('https://api.portal.idc.md/api/listGenre')
	},
}
