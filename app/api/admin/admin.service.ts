import axios from '../interceptors'
import { IAdminFileList } from '@/shared/types/admin.types'


export interface iAdminGenre {
	color: null | string
	description: string
	id: number
	name: string
	show: 0 | 1
	sort: number
	type: number
	created_at: string
	updated_at: string
}

export interface updateGenre {
	id: number
	name: string
	description: string
	sort: number
}

export const AdminService = {
	async getGenreList():Promise<{ data:iAdminGenre[] }> {
		const data = await axios.get(`adm/genreList`)
		return data.data
	},
	async getGenre(id: string): Promise< iAdminGenre > {
		const data = await axios.get(`adm/genre/${id}`)
		return data.data.data
	},

	async postGenre(genre: FormData) {
		const response = await axios.post(`adm/genreAdd`, genre);
		return response.data.data;
	},

	async getFileList(page: string, search: string = '', cid: string = '', year: string = '', hidden: string = '') {
		const data = await axios.get<IAdminFileList>(`adm/fileList?page=${page}&hidden=${hidden}&query=${search}&cid=${cid}&year=${year}&accessChange=undefined`)
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

	async setGenreForFilm(movieId:string, genreId:string, isActive:boolean){
		return axios.get(`adm/filmGenreChange/${movieId}/${genreId}/${isActive?'1':"0"}`)
	}
}