import { getAdminHomeUrl, getAdminUrl } from '../../../config/url.config'

import { INavItem } from './admin-navigation.interface'

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
	{
		link: getAdminUrl('actors'),
		title: 'Актеры',
	},
	{
		link: getAdminUrl('genres'),
		title: 'Жанры',
	},
]
