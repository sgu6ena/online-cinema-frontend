import { useMutation, useQuery } from 'react-query'
import { PortalService } from '../../../../api/portal.service'
import { toastError } from '@/utils/toast-error'

export const usePromocode = () => {


	const { mutateAsync: updateAsync, data, isLoading,  } = useMutation(
		'get info  promocodes',
		({code}:{ code: string }) => PortalService.infoPromocode(code),
		{
			onError(error) {
				toastError(error)
			},
		},
	)

	return {updateAsync , data, isLoading}


}