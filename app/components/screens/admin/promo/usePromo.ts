import { useQuery } from 'react-query'
import { AdminService } from '../../../../api/admin/admin.service'
import { toastError } from '@/utils/toast-error'
import { useRouter } from 'next/router'

export const usePromos = () => {
	const { push, query } = useRouter()
	const page = query.page || '1'
	const promos = useQuery(

		['promo codes admin list', page],
		() => AdminService.getPromocodesList(page as string),
		{
			onError(error) {
				toastError('Ошибка получения списка промокодов')
			},
		},
	)
	return promos
}