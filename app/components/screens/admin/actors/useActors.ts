import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { getAdminUrl } from '../../../../config/url.config'
import { useDebounce } from '../../../../hooks/useDubounce'
import { ActorService } from '../../../../services/actor.service'
import { toastError } from '../../../../utils/toast-error'
import { ITableItem } from '../../../ui/AdminTable/admin-table.interface'

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['actors list', debouncedSearch],
		() => ActorService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editUrl: getAdminUrl(`actor/edit/${actor._id}`),
						items: [actor.name, actor.countMovies.toString()],
					})
				),

			onError: (error) => {
				toastError(error, 'Список actors')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		['delete actor', debouncedSearch],
		(actorId: string) => ActorService.deleteActor(actorId),
		{
			onError: (error) => {
				toastError(error, 'Удаление actor')
			},
			onSuccess: () => {
				toastr.success('Удаление actor', 'удаление прошло успешно')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({ handleSearch, ...queryData, searchTerm, deleteAsync }),
		[queryData, searchTerm, deleteAsync]
	)
}
