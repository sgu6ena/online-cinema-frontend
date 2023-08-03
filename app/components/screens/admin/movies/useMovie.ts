import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useMutation, useQuery } from 'react-query'

import { PortalService } from '../../../../api/portal.service'
import { getAdminUrl } from '@/config/url.config'
import { useDebounce } from '@/hooks/useDubounce'
import { AdminService } from '../../../../api/admin/admin.service'
import { toastError } from '@/utils/toast-error'
import { useSearch } from '@/hooks/useSearchFilters'
import { IList } from '@/shared/types/search.types'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [cid, setCid] = useState('')
	const [year, setYear] = useState('')
	const [hidden, setHidden] = useState(false)
	const debouncedSearch = useDebounce(searchTerm, 500)
	const { genre } = useSearch()
	const years: IList[] = [...Array(94)].map((x, y) => ({ id: y + 1930, name: (y + 1930).toString() })).reverse()
	const { push, query } = useRouter()
	const page = query.page || '1'

	const queryData = useQuery(
		['movie list', debouncedSearch, page, cid, year, hidden],
		() => AdminService.getFileList(page as string || '1', debouncedSearch, cid, year, hidden ?'1':""),
		{
			onError(error) {
				toastError('Ошибка получения списка фильмов')
			},
		},
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const handleCid = (value: string) => {
		setCid(value)
	}
	const handleYear = (value: string) => {
		setYear(value)
	}

	const handleHidden = () => {
		setHidden(!hidden)
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
			handleCid,
			handleYear,
			handleSearch,
			handleHidden,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
			genre: [{ id: 103, name: 'Баннеры' }, ...genre],
			years,
			cid, year, hidden,
		}),
		[queryData, searchTerm, deleteAsync, createAsync],
	)
}
