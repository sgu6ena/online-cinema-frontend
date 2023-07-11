import { useMutation, useQuery } from 'react-query'
import { PortalService } from '../../../../api/portal.service'
import { toastError } from '@/utils/toast-error'
import { toast } from 'react-hot-toast'
import { getAdminUrl } from '@/config/url.config'
import { AdminService, iPromocode } from '../../../../api/admin/admin.service'
import { value } from 'dom7'

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