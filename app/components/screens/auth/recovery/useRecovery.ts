import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { PortalService } from '../../../../api/portal.service'
import { toast } from 'react-hot-toast'

export const useRecovery = () => {
	const { query } = useRouter()

	const recoveryKey = String(query.key)

	const { isLoading, data, isError, isSuccess } = useQuery(
		['восстановление пароля', recoveryKey],
		() => PortalService.recoveryPassword(recoveryKey),
		{
			onSuccess: (data) => data,
			onError: (e) => {
				toast.error(e as string)
			},
		},
	)

	return{isLoading, data, isError, isSuccess}
}
