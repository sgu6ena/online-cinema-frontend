import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'
import { PortalService } from '../../../../api/portal.service'
import { toast } from 'react-hot-toast'
import { useActions } from '@/hooks/useActions'


export const useDelete = () => {
	const {push} = useRouter()
	const { logout } = useActions()
	const { isLoading, data, isError, isSuccess, mutateAsync } = useMutation(
		['удаление аккаунта'],
		() => PortalService.getDeleteProfile(),
		{
			onSuccess: (data) => {

				push('/').then(	()=>logout()).then(()=>toast.success('Аккаунт был удален'))
			},
			onError: (e) => {
				toast.error('Ошибка удаления аккаута: ' + e as string)
			},
		},
	)

	return{isLoading, data, isError, isSuccess, deleteAcc:mutateAsync}
}
