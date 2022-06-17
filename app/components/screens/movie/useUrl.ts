import { useQuery } from 'react-query'

import { PortalMovieService } from '../../../api/portalMovie.service'
import { toastError } from '../../../utils/toast-error'

export const useUrl = (id: string) => {
	const { isLoading, data } = useQuery(
		['slides portal'],
		() => PortalMovieService.getUrl(id),
		{
			onSuccess: (data) => data,
			onError: (e) => {
				toastError(e, 'get portal movie url')
			},
		}
	)

	return { isLoading, data }
}
