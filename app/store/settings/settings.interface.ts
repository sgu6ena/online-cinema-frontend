export interface IState {
	isPromoAvailable: boolean
	isLoading: boolean
	isSmsSend: boolean
	isCodeChangePhoneSend: boolean
	isCodeChangeEmailSend: boolean
	isError: boolean
	isPayed: boolean
	error: string
	subscriptions: ISubscpition[],
}

export interface ISubscpition {
	hide: boolean
	packet_id: number
	packet_name: string
	packet_price: number
	packet_text1: string
	packet_text2: string
}

export const initialState: IState = {
	subscriptions: [],
	isLoading: false,
	isSmsSend: false,
	isCodeChangePhoneSend: false,
	isCodeChangeEmailSend: false,
	isPromoAvailable: true,
	isError: false,
	isPayed: false,
	error: '',
}

export interface ISendSms {
	mobile: string
	service:number
}

export interface ICheckSms {
	sms: string
	service:number
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
