export const convertMongoDbDate = (date: string) => {
	return new Date(date).toLocaleString('ru-RU')
}
