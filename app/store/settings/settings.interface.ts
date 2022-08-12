export interface IState {
	isLoading: boolean
	isSmsSend: boolean
}
export const initialState: IState = {
	isLoading: false,
	isSmsSend: false
}

export interface ISendSms {
	mobile: string
}

export interface  ICheckSms {
	sms: string
	promo: boolean
}