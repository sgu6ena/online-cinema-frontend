import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useMutation, useQuery } from 'react-query'

import { PortalService } from '../../../../api/portal.service'
import { getAdminUrl } from '../../../../config/url.config'
import { useDebounce } from '../../../../hooks/useDubounce'
import { getGenresList } from '../../../../utils/movie/getGenresList'
import { ITableItem } from '../../../ui/AdminTable/admin-table.interface'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['movie list', debouncedSearch],
		() => PortalService.getSearch(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie: any): ITableItem => ({
						_id: movie._id,
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						items: [
							movie.title,
							getGenresList(movie.genres),
							String(movie.rating),
						],
					})
				),
			onError(error) {
				toast('Список фильмов')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create movie',
		() => PortalService.create(),
		{
			onError(error) {
				toast('Create movie error')
			},
			onSuccess({ data: _id }) {
				toast.success('Create movie was successful')
				push(getAdminUrl(`movie/edit/${_id}`))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete movie',
		(movieId: string) => PortalService.delete(movieId),
		{
			onError(error) {
				toast('Delete movie')
			},
			onSuccess() {
				toast('Delete movie was successful')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
