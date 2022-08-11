import { LINKS } from '../../../config/links'
import { IMenuItem } from '../../layout/Navigation/MenuContainer/menu.interface'

export const settingsMenu: IMenuItem[] = [
	{
		icon: 'MdLocalMovies',
		link: LINKS.SUBSCRIPTIONS,
		title: 'Подписки',
	},
	{
		icon: 'MdMovieCreation',
		link: LINKS.PROMOCODE,
		title: 'Промокод',
	},
	{
		icon: 'MdMovieFilter',
		link: LINKS.DEVICES,
		title: 'Устройства',
	},
	{
		icon: 'MdChildCare',
		link: LINKS.ACCOUNT,
		title: 'Аккаунт',
	},
]
