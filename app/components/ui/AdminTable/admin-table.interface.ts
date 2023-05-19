import { IAdminFileListData } from '@/shared/types/admin.types'

export interface ITableItem {
	_id: string
	editUrl: string
	items: string[]
}

export interface IAdminTable {
	tableItem: ITableItem
	removeHandler: (id: string) => void
}

export interface ITableMovieItem {
	_id: string
	editUrl: string
	items: IAdminFileListData[]
}
export interface IAdminMovieTable {
	tableItem: IAdminFileListData
	removeHandler: (id: string) => void
}
