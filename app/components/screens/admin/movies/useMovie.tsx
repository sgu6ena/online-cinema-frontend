import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useMutation, useQuery } from 'react-query'

import { PortalService } from '../../../../api/portal.service'
import { getAdminUrl } from '../../../../config/url.config'
import { useDebounce } from '../../../../hooks/useDubounce'
import { AdminService } from '../../../../api/admin/admin.service'
import { toastError } from '../../../../utils/toast-error'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { push, query } = useRouter()
	const page = query.page || '1'
	const queryData = useQuery(
		['movie list', debouncedSearch, page],
		() => AdminService.getFileList(page as string || '1', debouncedSearch),
		{
			onError(error) {
				toastError('Ошибка получения списка фильмов')
			},

		},
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: createAsync } = useMutation(
		'create movie',
		() => PortalService.create(),
		{
			onError(error) {
				toastError('Ошибка при создании фильма')
			},
			onSuccess({ data: id }) {
				toast.success('Создание фильма прошло успешно')
				push(getAdminUrl(`movie/edit/${id}`))
			},
		},
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete movie',
		(movieId: string) => PortalService.delete(movieId),
		{
			onError(error) {
				toastError('Ошибка удаления фильма')
			},
			onSuccess() {
				toast('Удаление фильма прошло успешно')
				queryData.refetch()
			},
		},
	)

	return useMemo(
		() => ({
			page: query.page,
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync],
	)
}
