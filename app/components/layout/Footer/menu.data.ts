import { IMenuItem } from '../Navigation/MenuContainer/menu.interface'
import { LINKS } from '../../../config/links'

export const aboutUs: IMenuItem[] =
	[
		{
			icon: 'MdLogin',
			link: LINKS.REGISTER,
			title: 'Регистрация и оплата',
		},
		{
			icon: 'MdPersonAddAlt',
			link: LINKS.PROCESSING,
			title: 'Политика приватности',
		},
		{
			icon: 'MdLogin',
			link: LINKS.AGREEMENT,
			title: 'Пользовательское соглашение',
		},
		{
			icon: 'MdPersonAddAlt',
			link: LINKS.FEEDBACK,
			title: 'Сообщить об ошибке',
		},
	]


export const sections: IMenuItem[] =
	[
		{
			icon: 'MdLogin',
			link: LINKS.FAVORITES,
			title: 'Мой PORTAL',
		},
		{
			icon: 'MdPersonAddAlt',
			link: LINKS.MAIN,
			title: 'Новинки',
		},
		{
			icon: 'MdLogin',
			link: LINKS.MAIN,
			title: 'Фильмы',
		},
		{
			icon: 'MdPersonAddAlt',
			link: LINKS.MAIN,
			title: 'Сериалы',
		},
		{
			icon: 'MdPersonAddAlt',
			link: LINKS.MAIN,
			title: 'Мультфильмы',
		},
		{
			icon: 'MdLogin',
			link: LINKS.MAIN,
			title: 'Подборки',
		},
		{
			icon: 'MdPersonAddAlt',
			link: LINKS.MAIN,
			title: 'Что посмотреть',
		},
	]



