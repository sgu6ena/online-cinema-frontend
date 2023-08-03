import { IPagination } from './movie.types'

export interface IAdminFileListData {
	genre: {name:string, id:number}[]
	country: string[]
	age: string
	links: number
	access: 0 | 1
	created_at: string
	hidden: 0 | 1
	history: number //история просмотров
	id: number
	last_admin_action: string
	logo: string
	mod_access: 0 | 1
	rate_kp: number
	title: string
	title_org: string
	updated_at: string
	vote_kp: number
	year: number
}

export interface IAdminFileList {
	data: IAdminFileListData[]
	pagination: IPagination
}

export interface IAdminGenreListData {
	color: null | string
	created_at: string
	description: string
	id: number
	name: string
	show: number
	sort: number
	type: number
	updated_at: string
}