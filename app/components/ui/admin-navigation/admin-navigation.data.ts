import { getAdminHomeUrl, getAdminUrl } from '../../../config/url.config'

export interface INavItem {
	title: string
	link: string
}

export const navItems: INavItem[] = [
	{
		link: getAdminHomeUrl(),
		title: 'Статистика',
	},
	{
		link: getAdminUrl('users'),
		title: 'Пользователи',
	},
	{
		link: getAdminUrl('movies'),
		title: 'Фильмы',
	},
	// {
	// 	link: getAdminUrl('actors'),
	// 	title: 'Актеры',
	// },
	{
		link: getAdminUrl('genres'),
		title: 'Подборки',
	},
	{
		link: getAdminUrl('banners'),
		title: 'Баннеры',
	},
]
