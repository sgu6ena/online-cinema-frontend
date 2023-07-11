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
	phone: string
	email: string
	subscription: 0 | 1 | 2
	paid: 0 | 1 | 2
	point: string
	avatar: string
	level: 0 | 1 | 2 | 3 | 4 | 5
	dtEnd: string
	dtFlow: string | null
	promo: boolean


	packet_active_end?: string
	packet_active_id?: number
	packet_active_price?: number
	packet_active_promo?: boolean
	packet_active_text1?: string
	packet_active_text2?: string

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