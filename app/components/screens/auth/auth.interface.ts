export interface IAuthInput {
	login: string
	password: string
}

export interface IRegisterInputEmail {
	login: string
	email: string
	password: string
	passwordRpt: string
}

export interface IRegisterInputMobile {
	login: string
	password: string
	passwordRpt: string
}
export interface IRecoveryInput {
	email: string
}
