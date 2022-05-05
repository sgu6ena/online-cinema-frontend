import { axiosClassicPortal } from '../api/interceptors'
import { IGalleryHome } from '../components/ui/gallery/gallery.interface'
import { getСategoryUrl } from '../config/api-portal.config'
import { IMoviePortal, IMoviePortalPerPage } from '../shared/types/movie.types'

interface IMain {
	status: number
	success: boolean
	data: IGalleryHome[]
}

export const PortalService = {
	async getAll() {
		const data = await axiosClassicPortal.get<IMoviePortalPerPage>(
			getСategoryUrl('102/60')
		)
		return data.data.data.items
	},

	async getCategory(
		slug: string | undefined = '0',
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

	async getSlides() {
		const data = await axiosClassicPortal.get<IMain>('/main')
		return {
			slider: data.data.data[0].items,
			collections: data.data.data.slice(1),
		}
	},
}