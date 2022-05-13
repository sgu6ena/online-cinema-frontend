export interface IUser {
	avatar: string
	//дата окончания подписка, с текстом описанием, если paid = 0 то пустая
	dtEnd: string
	//?
	dtFlow: null | any
	email: string
	id: number
	level: number
	login: string
	name: string
	paid: 0 | 1
	point: null
	promo: boolean
	subscription: 0 | 1 | 2
}

export interface IUserData {
	status: number
	success: boolean
	data?: IUser
	error?: {
		code: number
		message: string
	}
}
