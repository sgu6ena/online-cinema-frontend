import axios from '../interceptors'
import { IAdminFileList } from '@/shared/types/admin.types'

export const AdminService = {
	async getGenreList() {
		const data = await axios.get(`adm/genreList`)
		return data.data
	},

	async getFileList(page:string, search:string='', cid:string='', year:string='', hidden:string='') {
		const data = await axios.get<IAdminFileList>(`adm/fileList?page=${page}&query=${search}&cid=${cid}&year=${year}&hidden=undefined&accessChange=undefined`)
		return data.data
	},

	async getFileLog(id: string) {
		const data = await axios.get(`adm/fileLog/${id}`)
		return data.data
	},

	async getSubList() {
		const data = await axios.get(`adm/subsList`)
		return data
	},

	async showSubs() {
		return axios.get(`adm/showSubs/1`)
	},
}