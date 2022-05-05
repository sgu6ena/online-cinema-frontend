import { axiosClassicPortal } from '../api/interceptors'
import { getMovieUrl } from '../config/api-portal.config'
import { IMoviePortalPage } from '../shared/types/movie.types'

export const PortalMovieService = {
	async getById(id: string) {
		const data = await axiosClassicPortal.get<IMoviePortalPage>(
			getMovieUrl(`${id}`)
		)

		return data.data
	},
}