import {IMenuItem} from "../../Navigation/MenuContainer/menu.interface";
import { LINKS } from '../../../../config/links'

export const notUserMenu: IMenuItem[] =
	[
		{
			icon: 'MdRefresh',
			link: LINKS.LOGIN,
			title: 'Войти',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: LINKS.REGISTER,
			title: 'Регистрация',
		},
	]


export const userMenu: IMenuItem[] =
	[
		{
			icon: 'MdRefresh',
			link: LINKS.FAVORITES,
			title: 'Избранное',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: LINKS.PROFILE,
			title: 'Профиль',
		},

		{
			icon: 'MdMovieCreation',
			link:  LINKS.RUBLE,
			title: 'PORTAL за рубль',
		},
	]
