import { useQuery } from 'react-query'
import { AdminService } from '../../../../api/admin/admin.service'
import { toastError } from '../../../../utils/toast-error'

export const useGenres = () => {
	const genres = useQuery(
		['genres admin list'],
		() => AdminService.getGenreList(),
		{
			onError(error) {
				toastError('Ошибка получения списка юзеров')
			},
		},
	)
	return { genres: genres?.data?.data || [], isLoading: genres.isLoading }
}