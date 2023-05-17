import { useMutation, useQuery } from 'react-query'
import { AdminService, updateGenre } from '../../../../api/admin/admin.service'
import { toastError } from '@/utils/toast-error'
import { PortalService } from '../../../../api/portal.service'
import { toast } from 'react-hot-toast'
import { getAdminUrl } from '@/config/url.config'
import { useRouter } from 'next/router'
import { LINKS } from '@/config/links'


export const useGenre = (id: string, data?: any) => {
	const { push, query } = useRouter()

	const genre = useQuery(
		['genre admin ', id],
		() => AdminService.getGenre(id),
		{
			onError(error) {
				toastError('Ошибка получения жанра/подборки')
			},
		},
	)

	const { mutateAsync: createAsync } = useMutation(
		'update genre',
		(data:updateGenre) => AdminService.postGenre(data),
		{
			onError(error) {
				toastError('Ошибка при редактировании жанра/подборки')
			},
			onSuccess() {
				push(getAdminUrl(`genres`)).then(() => toast.success('Редактирование жанра/подборки прошло успешно'))
			},
		},
	)


	return { genre: genre.data, isLoading: genre.isLoading , createAsync}
}