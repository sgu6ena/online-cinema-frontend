import { TypeMaterialIconsName } from '@/shared/types/icon.types'

export interface IMenuItem {
	icon: TypeMaterialIconsName
	title: string
	link: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}