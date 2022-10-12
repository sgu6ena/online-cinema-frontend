import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { PortalService } from '../../../../api/portal.service'
import { toast } from 'react-hot-toast'

export const useActivate = () => {
	const { query } = useRouter()

	const activateKey = String(query.key)

	const { isLoading, data, isError, isSuccess } = useQuery(
		['активация регистрации', activateKey],
		() => PortalService.activateRegister(activateKey),
		{
			onSuccess: (data) => data,
			onError: (e) => {
				toast.error(e as string)
			},
		},
	)

	return{isLoading, data, isError, isSuccess}
}
