import { errorCatch } from "../api/api.helperts"
import { toast } from 'react-hot-toast'

export const toastError = (error: any, title?: string) => {
	const message = errorCatch(error)
	toast.error( message||error||"Ошибка")
	throw message
}
