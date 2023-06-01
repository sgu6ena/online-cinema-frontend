import { useMutation, useQuery } from 'react-query'
import { AdminService, updateGenre } from '../../../../api/admin/admin.service'
import { toastError } from '@/utils/toast-error'
import { toast } from 'react-hot-toast'
import { getAdminUrl } from '@/config/url.config'
import { useRouter } from 'next/router'
export interface GenreFormData {
	file: FileList;
	id: string
	name: string;
	sort: string;
	description: string;
}


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

	const { mutateAsync: updateAsync } = useMutation(
		'update genre',
		(data: GenreFormData) => {
			const formData = new FormData()
			formData.append('id', id)
			formData.append('file', data.file[0])
			formData.append('name', data.name)
			formData.append('sort', data.sort)
			formData.append('description', data.description)
			return AdminService.postGenre(formData)
		},
		{
			onError(error) {
				toastError('Ошибка при редактировании жанра/подборки')
			},
			onSuccess() {
				push(getAdminUrl(`genres`)).then(() =>
					toast.success('Редактирование жанра/подборки прошло успешно'),
				)
			},
		},
	)
	const { mutateAsync: createAsync } = useMutation(
		'update genre',
		(data: GenreFormData) => {
			const formData = new FormData()
			formData.append('file', data.file[0])
			formData.append('name', data.name)
			formData.append('sort', data.sort)
			formData.append('description', data.description)
			return AdminService.postGenre(formData)
		},
		{
			onError(error) {
				toastError('Ошибка при создании жанра/подборки')
			},
			onSuccess() {
				push(getAdminUrl(`genres`)).then(() =>
					toast.success('Создание жанра/подборки прошло успешно'),
				)
			},
		},
	)


	return { genre: genre.data, isLoading: genre.isLoading, updateAsync, createAsync }
}