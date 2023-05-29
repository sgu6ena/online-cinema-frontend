export interface IState {
	isPromoAvailable: boolean
	isLoading: boolean
	isSmsSend: boolean
	isCodeChangePhoneSend: boolean
	isCodeChangeEmailSend: boolean
	isError: boolean
	isPayed:boolean
	error: string
}

export const initialState: IState = {
	isLoading: false,
	isSmsSend: false,
	isCodeChangePhoneSend: false,
	isCodeChangeEmailSend: false,
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

export interface IChangePhone {
	phone: string
}

export interface IChangeConf{
	code: string
}

export interface IChangeEmail {
	email: string
}
