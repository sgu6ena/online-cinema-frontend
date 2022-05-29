import {IMenuItem} from "../../Navigation/MenuContainer/menu.interface";
import {LINKS} from '../../../../config/links'

export const notUserMenu: IMenuItem[] =
    [
        {
            icon: 'MdLogin',
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
