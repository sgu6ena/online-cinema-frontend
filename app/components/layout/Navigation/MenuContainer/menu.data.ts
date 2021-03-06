import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Меню',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Главная',
		},
		{
			icon: 'MdRefresh',
			link: '/genres/101',
			title: 'Новинки',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/genres/102',
			title: 'Смотрят сейчас',
		},

		{
			icon: 'MdMovieCreation',
			link: '/genres/100',
			title: 'Фильмы',
		},
		{
			icon: 'MdMovieFilter',
			link: '/genres/39',
			title: 'Сериалы',
		},
		{
			icon: 'MdChildCare',
			link: '/genres/20',
			title: 'Мультфильмы',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Жанры',
		},
	],
}

export const userMenu: IMenu = {
	title: 'Главное меню',
	items: [],
}

export const menus: IMenu[] = [firstMenu, userMenu]
