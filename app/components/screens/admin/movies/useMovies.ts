import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { getAdminUrl } from '../../../../config/url.config'
import { useDebounce } from '../../../../hooks/useDubounce'
import { MovieService } from '../../../../services/movie.service'
import { toastError } from '../../../../utils/toast-error'
import { ITableItem } from '../../../ui/AdminTable/admin-table.interface'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['movies list', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						items: [
							movie.title,
							movie.countOpened.toString(),
							movie.rating.toString(),
						],
					})
				),

			onError: (error) => {
				toastError(error, 'Список фильмов')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete movie', debouncedSearch],
		(movieId: string) => MovieService.deleteMovie(movieId),
		{
			onError: (error) => {
				toastError(error, 'Удаление фильма')
			},
			onSuccess: () => {
				toastr.success('Удаление фильма', 'удаление прошло успешно')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({ handleSearch, ...queryData, searchTerm, deleteAsync }),
		[queryData, searchTerm, deleteAsync]
	)
}
