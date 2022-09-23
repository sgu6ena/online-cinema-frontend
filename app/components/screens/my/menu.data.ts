import { LINKS } from '../../../config/links'
import { IMenuItem } from '../../layout/Header/menu.interface'


export const myMenu: IMenuItem[] = [
	{
		icon: 'MdBookmarkBorder',
		link: LINKS.FAVORITES,
		title: 'Избранное',
	},
	{
		icon: 'MdBookmarkBorder',
		link: LINKS.HISTORY,
		title: 'История просмотра',
	},
	// {
	// 	icon: 'MdBookmarkBorder',
	// 	link: LINKS.RATING,
	// 	title: 'Оценки',
	// },
]
