export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const errorCatch = (error: any): string => 	error.response.data.error.message
	// error.response && error.response.data && error.response.data.error
	// 	? typeof error.response.data.error.message === 'object'
	// 		? error.response.data.error.message[0]
	// 		: error.response.data.error.message
	// 	: error.message
