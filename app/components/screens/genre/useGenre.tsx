import { useRouter } from 'next/router'
import { useQuery } from 'react-query'


import { toastError } from '../../../utils/toast-error'
import { PortalService } from '../../../api/portal.service'

export const useGenre = () => {
	const { query } = useRouter()
	const page = String(query?.page)
	const genreId = String(query.id)



	const { isLoading, data } = useQuery(
		['жарны portal', genreId, page],
		() => PortalService.getCategory(genreId, page),
		{
			onSuccess: (data) => data.data,
			onError: (e) => {
				toastError(e, 'get movie portal')
			},
			enabled: !!query.id,
		},
	)
	const title = data?.data.data.title
	const movies = data?.data.data.items

	 const pagination = data?.data.pagination

	return { isLoading, data, title, movies, pagination }
}
