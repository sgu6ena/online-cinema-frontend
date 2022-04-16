import axios from "../api/interceptors"
import { getUserUrl } from "../config/api.config"

export const AdminService={
	async getCountUsers(){
		return axios.get<number>(getUserUrl('/count'))
	}
}