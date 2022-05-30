
import { PortalMovieService } from '../../../api/portalMovie.service'
import { toastError } from '../../../utils/toast-error'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { PortalService } from '../../../api/portal.service'

export const useBookmarks = () => {
	const { query } = useRouter()
	const page = String(query?.page)

	const { isLoading, data } = useQuery(
		['get bookmark',page ],
		() => PortalService.getBookmark(page),
		{
			onSuccess: (data) => {
				return data.data
			},
			onError: (e) => {
				toastError(e, 'get bookmark')
			},
		}
	)
	const movies = data?.data

	const pagination = data?.pagination

	return { isLoading,  movies, pagination }
}


