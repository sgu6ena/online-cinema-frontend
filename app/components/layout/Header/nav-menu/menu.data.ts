import {IMenuItem} from "../../Navigation/MenuContainer/menu.interface";

export const headerNavMenu: IMenuItem[] =
	[
		{
			icon: 'MdLocalMovies',
			link: '/favorites',
			title: 'Мой PORTAL',
		},
		{
			icon: 'MdMovieCreation',
			link: '/genres/0',
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
		}
	]

