import axios from '../api/interceptors'
import { getUserUrl } from '../config/api.config'
import { IUser } from '../shared/types/user.types'

export const userService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getUserUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async deleteUser(_id: string) {
		return axios.delete<string>(getUserUrl(`/${_id}`))
	},
}
