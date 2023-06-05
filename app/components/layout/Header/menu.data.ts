import { LINKS } from '../../../config/links'
import { IMenuItem } from './menu.interface'

export const notUserMenu: IMenuItem[] =
	[
		{
			icon: 'MdLogin',
			link: LINKS.LOGIN,
			title: 'Войти',
		},
		{
			icon: 'MdPersonAddAlt',
			link: LINKS.REGISTER,
			title: 'Регистрация',
		},
		{
			icon: 'MdSearch',
			link: LINKS.SEARCH,
			title: 'Расширенный поиск',
		},
	]


export const userMenu: IMenuItem[] =
	[
		{
			icon: 'MdSearch',
			link: LINKS.SEARCH,
			title: 'Расширенный поиск',
		},
		{
			icon: 'MdBookmarkBorder',
			link: LINKS.FAVORITES,
			title: 'Мой PORTAL',
		},
		{
			icon: 'MdHistory',
			link: LINKS.HISTORY,
			title: 'История просмотра',
		},
		{
			icon: 'MdPersonOutline',
			link: LINKS.SETTINGS,
			title: 'Профиль',
		},

	]


export const headerMobileMenu: IMenuItem[] =
	[
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
	]
export const headerNavMenu: IMenuItem[] = [
	{
		icon: 'MdLocalMovies',
		link: LINKS.FAVORITES ,
		title: 'Я смотрю',
	},
	{
		icon: 'MdMovieCreation',
		link: LINKS.FILMS,
		title: 'Фильмы',
	},
	{
		icon: 'MdMovieFilter',
		link: LINKS.SERIALS,
		title: 'Сериалы',
	},
	{
		icon: 'MdChildCare',
		link: LINKS.MULTFILMS,
		title: 'Мультфильмы',
	},
]