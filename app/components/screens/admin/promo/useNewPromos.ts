import { useMutation, useQuery } from 'react-query'
import { toastError } from '@/utils/toast-error'
import { toast } from 'react-hot-toast'

import { AdminService, iPromocode } from '../../../../api/admin/admin.service'


export const useNewPromos = () => {

	const packets = useQuery(
		['idPackets'],
		() => AdminService.getTariffList(),
		{
			onError(error) {
				toastError('Ошибка получения списка пакетов')
			},
		},
	)

	const { mutateAsync: updateAsync, data, isLoading,  } = useMutation(
		'generate promo codes',
		(data:iPromocode) => AdminService.generatePromocode(data),
		{
			onError(error) {
				toastError('Ошибка при создании промокодов')
			},
			onSuccess() {
				toast.success('Ok')
			},
		},
	)


	const labels = packets.data?.map(packet=>({label:packet.name, value:packet.id}))
	return { packets:labels,updateAsync, isLoading, packetsLoading:packets.isLoading }
}