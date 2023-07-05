import { useQuery } from 'react-query'
import { AdminService } from '../../../../api/admin/admin.service'
import { toastError } from '@/utils/toast-error'

export const usePromos = () => {
	const promos = useQuery(
		['promo codes admin list'],
		() => AdminService.getPromocodesList(),
		{
			onError(error) {
				toastError('Ошибка получения списка промокодов')
			},
		},
	)
	return promos
}