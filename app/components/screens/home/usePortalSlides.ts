import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { PortalService } from '../../../services/portal.service'
import { PortalMovieService } from '../../../services/portalMovie.service'
import { toastError } from '../../../utils/toast-error'

export const usePortalSlides = () => {
	const { isLoading, data } = useQuery(
		['slides portal'],
		() => PortalService.getSlides(),
		{
			onSuccess: (data) => data,
			onError: (e) => {
				toastError(e, 'get portal slides')
			},
		}
	)

	return { isLoading, data }
}
