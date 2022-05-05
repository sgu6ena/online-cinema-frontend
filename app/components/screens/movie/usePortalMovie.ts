import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { PortalMovieService } from '../../../services/portalMovie.service'
import { toastError } from '../../../utils/toast-error'

export const usePortalMovie = () => {
	const { query } = useRouter()

	const movieId = String(query.id)

	const { isLoading, data } = useQuery(
		['movie portal', movieId],
		() => PortalMovieService.getById(movieId),
		{
			onSuccess: (data) => {
				return data
			},
			onError: (e) => {
				toastError(e, 'get movie portal')
			},
			enabled: !!query.id,
		}
	)
	const movie = data?.data
	return { isLoading, movie }
}