import { IMenuItem } from '../../layout/Navigation/MenuContainer/menu.interface'
import { LINKS } from '../../../config/links'

export const myMenu: IMenuItem[] = [{
	icon: 'MdBookmarkBorder',
	link: LINKS.FAVORITES,
	title: 'Мое Избранное',
},
	{
		icon: 'MdBookmarkBorder',
		link: LINKS.HISTORY,
		title: 'Моя история',
	},
	{
		icon: 'MdBookmarkBorder',
		link: LINKS.RATING,
		title: 'Мои оценки',
	},
]