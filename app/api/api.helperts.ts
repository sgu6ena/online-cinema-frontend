export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const errorCatch = (error: any): string => {
	if (typeof error === 'string')
		return error

	if (error?.response?.data?.statusText)
		return error.response.data.statusText

	if (error?.response?.data?.error?.message)
		return error.response.data.error.message

	return 'ошибка'
}
// error.response && error.response.data && error.response.data.error
// 	? typeof error.response.data.error.message === 'object'
// 		? error.response.data.error.message[0]
// 		: error.response.data.error.message\\u041d\\u0435\\u0432\\u0435\\u0440\\u043d\\u044b\\u0439 \\u0444\\u043e\\u0440\\u043c\\u0430\\u0442 \\u043a\\u043e\\u0434\\u0430 \\u0430\\u043a\\u0442\\u0438\\u0432\\u0430\\u0446\\u0438\\u0438\"}}"
// 	: error.message
