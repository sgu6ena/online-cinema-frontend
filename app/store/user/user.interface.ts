export interface ITokens {
	token: string
	user: IAuthResponse
}

export interface IInitialState {
	user: IAuthResponse | null
	token: string,
	isLoading: boolean
	isRegistered: boolean
}

export interface ILoginPassword {
	login: string
	password: string
}

export interface IAuthResponse {
	id: string
	login: string
	name: string
	email: string
	subscription: 0 | 1 | 2
	paid: 0 | 1 | 2
	point: string
	avatar: string
	level: string
	dtEnd: string
	dtFlow: string | null
	promo: boolean
}

export interface IRegister {
	login: string
	email: string
	password: string
}

