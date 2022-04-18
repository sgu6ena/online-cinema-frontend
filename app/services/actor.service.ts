import axios, { axiosClassic } from '../api/interceptors'
import { getActorUrl } from '../config/api.config'
import { IActor } from '../shared/types/movie.types'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async deleteActor(_id: string) {
		return axios.delete<string>(getActorUrl(`/${_id}`))
	},
}
