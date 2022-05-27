import {IMenuItem} from "../../Navigation/MenuContainer/menu.interface";

export const headerMenu: IMenuItem[] =
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

