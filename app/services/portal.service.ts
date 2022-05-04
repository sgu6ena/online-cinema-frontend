import { axiosClassicPortal } from '../api/interceptors'
import { getСategoryUrl } from '../config/api-portal.config'
import { IMoviePortal, IMoviePortalPerPage } from '../shared/types/movie.types'

export const PortalService = {
	async getAll() {
		const data = await axiosClassicPortal.get<IMoviePortalPerPage>(
			getСategoryUrl('101')
		)
		return data.data.data.items
	},

	async getCategory(
		slug: string | undefined = '',
		page: string | string[] | undefined = '1'
	) {
		const data = await axiosClassicPortal.get<IMoviePortal>(
			getСategoryUrl(slug),
			{
				params: {
					page: page.toString(),
				},
			}
		)
		return data
	},

	// async getAll() {
	//     const {data: {data: {items: movies}}} = await axiosClassic.get<IMoviePortalPerPage>(
	//         'https://api.portal.idc.md/api/file/category/100'
	//     )
	//     return movies
	// },
}
