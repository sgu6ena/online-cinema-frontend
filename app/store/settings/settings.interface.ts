export interface IState {
	isLoading: boolean
	isSmsSend: boolean
	isError:boolean
}

export const initialState: IState = {
	isLoading: false,
	isSmsSend: false,
	isError: false,
}

export interface ISendSms {
	mobile: string
}

export interface ICheckSms {
	sms: string
	promo: boolean
}

export interface IChangePassword {
	passwordOld: string
	password: string
}