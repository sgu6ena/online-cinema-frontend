export const getMovieUrl = (slug: string) => `/movie/${slug}`
export const getGenreUrl = (slug: string) => `/genres/${slug}`
export const getActorUrl = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (slug: string) => `/admin/${slug}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)


export const LINKS = {
	AGREEMENT: '/public_terms.v3.pdf', //пользовательское соглашение
	//PROCESSING: '',//обработка персональных данных
	ADMIN: '/admin',
	MAIN: '/', //главная
	LOGIN: '/auth',//страница логина
	REGISTER: '/auth', //регистрация
	FORGOT: '/auth/recovery',//забыли пароль
	PROFILE: '/profile',//профиль
	RUBLE: '/settings/subscriptions',//купить за рубль
	FAVORITES: '/my/favorites', //избранное
	HISTORY: '/my/history', //История просмотра
	RATING: '/my/rating', // мои оценки
	SEARCH: '/search', //поиск с фильтрами
	SETTINGS: '/settings', //страница настроек
	SUBSCRIPTIONS: '/settings/subscriptions', //подписки
	PROMOCODE: '/settings/promocode', //промокод
	DEVICES: '/settings/devices', //устройства
	ACCOUNT: '/settings/account', //аккаунт
	NEW: '/genres/101', //новинки
	RECOMENDED: '/genres/107', //рекомендуем
	FILMS: '/genres/100',
	SERIALS: '/genres/39',
	MULTFILMS: '/genres/20',
	SHOW: '/genres/45',

	FEEDBACK: '/feedback', //Сообщить об ошибке
	FAQ: '/faq',
	ABOUT: '/about',

	APPSTORE: 'https://s.idc.md/portal_ios',
	GOOGLEPLAY: 'https://s.idc.md/portal_android',
	APPGALLERY: '/',
	SAMSUNG: '/smart#samsung',
	LG: '/smart#lg',
	HISENSE: '/smart#hisense',
	DUNE: '/smart#dune',
	ANDROIDTV: '/smart#androidtv',
	MIBOX: '/smart',

	VK: 'https://vk.com/idc_md',
	FACEBOOK: 'https://www.facebook.com/idc.md',
	OK: 'https://ok.ru/idknet',
	INSTAGRAM: 'https://www.instagram.com/idc_pmr/',
	VIBER:
		'https://invite.viber.com/?g2=AQBLHJE8CUqlCkkxt0lJqdMCxeHJVEFYdx2fn2NG8dmb803e%2FbtbamjywQkMoUE3&lang=ru',
	TELEGRAM: 'https://telegram.me/idcmd',
}