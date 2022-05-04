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
			onSuccess: (data) => data,
			onError: (e) => {
				toastError(e, 'get movie')
			},
			enabled: !!query.id,
		}
	)

	return { isLoading, data }
}
