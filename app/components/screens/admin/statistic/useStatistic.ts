import { useQuery } from 'react-query'

import { toastError } from '@/utils/toast-error'
import { PortalService } from '../../../../api/portal.service'

export const useStatistic = (id:string)=>{
	const queryData = useQuery(
		['catalog'+ id],
		() => PortalService.getCategory(id, {}),
		{
			onError(error) {
				toastError('Ошибка получения списка фильмов')
			},
		},
	)

	return queryData
}