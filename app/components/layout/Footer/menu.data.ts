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
			icon: 'MdLogin',
			link: LINKS.AGREEMENT,
			title: 'Публичные условия',
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
			link: LINKS.FILMS,
			title: 'Новинки',
		},
		{
			icon: 'MdLogin',
			link: LINKS.FILMS,
			title: 'Фильмы',
		},
		{
			icon: 'MdPersonAddAlt',
			link: LINKS.SERIALS,
			title: 'Сериалы',
		},
		{
			icon: 'MdPersonAddAlt',
			link: LINKS.MULTFILMS,
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

