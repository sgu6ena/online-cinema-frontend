export interface ITokens {
	token: string
	user: IAuthResponse
}

export interface IInitialState {
	user: IAuthResponse | null
	token: string
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
	level: 0 | 1 | 2 | 3 | 4 | 5
	dtEnd: string
	dtFlow: string | null
	promo: boolean
}

export interface IRegisterByEmail {
	// login: string
	email: string
	// password: string
}

export interface IRegisterByMobile {
	phone: string
	// password: string
}

export interface IRecoveryResponse {

}