import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { getAdminUrl } from '../../../../config/url.config'
import { useDebounce } from '../../../../hooks/useDubounce'
import { ActorService } from '../../../../services/actor.service'
import { GenreService } from '../../../../services/genre.service'
import { toastError } from '../../../../utils/toast-error'
import { ITableItem } from '../../../ui/AdminTable/admin-table.interface'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		[' list', debouncedSearch],
		() => GenreService.getSearch(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: getAdminUrl(`genre/edit/${genre._id}`),
						items: [genre.name, genre.slug],
					})
				),

			onError: (error) => {
				toastError(error, 'Список жанров')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete genre', debouncedSearch],
		(genreId: string) => ActorService.deleteActor(genreId),
		{
			onError: (error) => {
				toastError(error, 'Удаление жанра')
			},
			onSuccess: () => {
				toastr.success('Удаление жанра', 'удаление прошло успешно')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({ handleSearch, ...queryData, searchTerm, deleteAsync }),
		[queryData, searchTerm, deleteAsync]
	)
}
