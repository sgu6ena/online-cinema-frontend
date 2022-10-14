export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const errorCatch = (error: any): string => {

	if(error==='Отсутствует токен')
		return 'Необходимо авторизироваться'

	if (typeof error === 'string')
		return error

	if (error?.response?.data?.statusText)
		return error.response.data.statusText

	if (error?.response?.data?.error?.message)
		return error.response.data.error.message

	return 'ошибка'
}
