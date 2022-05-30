import { useQuery } from 'react-query'

import { PortalService } from '../../../api/portal.service'
import { toastError } from '../../../utils/toast-error'


export const usePortalSlides = () => {
	const { isLoading, data } = useQuery(
		['slides portal'],
		() => PortalService.getMain(),
		{
			onSuccess: (data) => data,
			onError: (e) => {
				toastError(e, 'get portal slides')
			},
		},
	)

	return { isLoading, slides: data?.slider||[], collections: data?.collections }
}