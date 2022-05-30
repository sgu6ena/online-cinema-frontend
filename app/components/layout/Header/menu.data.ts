import {IMenuItem} from "../Navigation/MenuContainer/menu.interface";
import {LINKS} from '../../../config/links'

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
    ]


export const userMenu: IMenuItem[] =
    [
        {
            icon: 'MdBookmarkBorder',
            link: LINKS.FAVORITES,
            title: 'Избранное',
        },
        {
            icon: 'MdPersonOutline',
            link: LINKS.PROFILE,
            title: 'Профиль',
        },

        {
            icon: 'MdShoppingBag',
            link: LINKS.RUBLE,
            title: 'PORTAL за рубль',
        },
        {
            icon: 'MdHistory',
            link: LINKS.HISTORY,
            title: 'История просмотра',
        }
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
  },
]