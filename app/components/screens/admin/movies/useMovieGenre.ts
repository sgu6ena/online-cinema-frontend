import { useMutation } from 'react-query'
import { PortalService } from '../../../../api/portal.service'
import { toastError } from '@/utils/toast-error'
import { toast } from 'react-hot-toast'
import { getAdminUrl } from '@/config/url.config'
import { AdminService } from '../../../../api/admin/admin.service'

export const useMovieGenre = () => {

	const { mutateAsync: updateAsync, data, isLoading } = useMutation(
		'update movie genres',
		({ movieId, genreId, isActive }: {
			movieId: string,
			genreId: string,
			isActive: boolean
		}) => AdminService.setGenreForFilm(movieId, genreId, isActive),
		{
			onError(error) {
				toastError('Ошибка при редактировании жанра')
			},
			onSuccess() {
				toast.success('Ok')
			},
		},
	)

	return { updateAsync, isLoading }
}