export const getMovieUrl = (slug: string) => `/movie/${slug}`
export const getGenreUrl = (slug: string) => `/genres/${slug}`
export const getActorUrl = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (slug: string) => `/admin/${slug}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)



export const LINKS = {
	AGREEMENT: 'https://portal.idc.md/public_terms.v2.pdf', //пользовательское соглашение
	PROCESSING: '',//обработка персональных данных

	MAIN: '/', //главная
	LOGIN: '/auth',//страница логина
	REGISTER: '/register', //регистрация
	PROFILE: '/profile',//профиль
	RUBLE: '/settings/subscriptions',//купить за рубль
	FAVORITES: '/my/favorites', //избранное
	HISTORY: '/my/history', //История просмотра
	RATING:'/my/rating', // мои оценки
	SEARCH: '/search', //поиск с фильтрами
	SETTINGS: '/settings', //страница настроек
	SUBSCRIPTIONS: '/settings/subscriptions', //подписки
	PROMOCODE: '/settings/promocode', //промокод
	DEVICES: '/settings/devices', //устройства
	ACCOUNT: '/settings/account', //аккаунт
	FILMS:'/genres/100',
	SERIALS:'/genres/39',
	MULTFILMS:'/genres/20',


	FEEDBACK:'/feedback',//Сообщить об ошибке


	APPSTORE:'https://s.idc.md/portal_ios',
	GOOGLEPLAY:'https://s.idc.md/portal_android',
	APPGALLERY:'/',
	SAMSUNG:'/',
	LG:'/',
	HISENSE:'/',
	MIBOX:'/',

	VK:'https://vk.com/idc_md',
	FACEBOOK:'https://www.facebook.com/idc.md',
	OK:'https://ok.ru/idknet',
	INSTAGRAM:'https://www.instagram.com/idc_pmr/',
	VIBER:'https://invite.viber.com/?g2=AQBLHJE8CUqlCkkxt0lJqdMCxeHJVEFYdx2fn2NG8dmb803e%2FbtbamjywQkMoUE3&lang=ru',
	TELEGRAM:'https://telegram.me/idcmd'
}