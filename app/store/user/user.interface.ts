export interface ITokens {
	token: string
	user: IAuthResponse
}

export interface IInitialState {
	user: IAuthResponse | null
	isLoading: boolean
}

export interface IEmailPassword {
	email: string
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
}

export interface IRegister {
	login: string
	email: string
	password: string
}