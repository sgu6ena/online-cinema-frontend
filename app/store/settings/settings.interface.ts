export interface IState {
	isPromoAvailable: boolean
	isLoading: boolean
	isSmsSend: boolean
	isError: boolean
	isPayed:boolean
	error: string
}

export const initialState: IState = {
	isLoading: false,
	isSmsSend: false,
	isPromoAvailable: true,
	isError: false,
	isPayed:false,
	error:''
}

export interface ISendSms {
	mobile: string
}

export interface ICheckSms {
	sms: string
	promo: 'true' | 'false'
}

export interface IChangePassword {
	passwordOld: string
	password: string
}

export interface IChangeEmail {
	email: string
}
