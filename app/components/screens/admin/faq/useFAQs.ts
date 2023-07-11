import { useMutation, useQuery } from 'react-query'
import { AdminService } from '../../../../api/admin/admin.service'
import { toastError } from '@/utils/toast-error'
import { toast } from 'react-hot-toast'

export const useFAQs= () => {
	const faqs = useQuery(
		['faq admin list'],
		() => AdminService.getFaqList(),
		{
			onError(error) {
				toastError('Ошибка получения вопросов')
			},
		},
	)

	const { mutateAsync: updateAsync, data, isLoading:updateLoading } = useMutation(
		'update faq',
		({ id, title, text }: {
			id: string,
			title: string,
			text: string
		}) => AdminService.updateFaq({ id, title, text }),
		{
			onError(error) {
				toastError('Ошибка при редактировании вопроса')
			},
			onSuccess() {
				toast.success('Ok')
			},
		},
	)

	const { mutateAsync: createAsync, isLoading:createLoading } = useMutation(
		'create faq',
		({  title, text }: {
			id: string,
			title: string,
			text: string
		}) => AdminService.addFaq({  title, text }),
		{
			onError(error) {
				toastError('Ошибка при создании вопроса')
			},
			onSuccess() {
				toast.success('Ok')
			},
		},
	)

	return { faqs: faqs?.data?.data.data || [], isLoading: faqs.isLoading, updateAsync, updateLoading, createAsync, createLoading }
}