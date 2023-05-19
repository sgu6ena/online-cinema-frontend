import { useQuery } from 'react-query'
import { AdminService } from '../../../../api/admin/admin.service'
import { toastError } from '@/utils/toast-error'

export const useUsers=()=>{
	const users = useQuery(
		['users list', ],
		() => AdminService.getSubList(),
		{
			onError(error) {
				toastError('Ошибка получения списка юзеров')
			},
		},
	)
	return { data:users?.data?.data.data||[], isLoading:users.isLoading }
}