import { useMutation } from 'react-query'
import { AdminService } from '../../../../api/admin/admin.service'
import { toastError } from '@/utils/toast-error'
import { getAdminUrl } from '@/config/url.config'
import { toast } from 'react-hot-toast'

export interface SlideFormData {
	file: FileList;
	id: string
	type:'slide1'|'slide2'
}
export const useMovieImage = () =>{
	const { mutateAsync: createAsync, isLoading, status } = useMutation(
		'update slider',
		(data: SlideFormData) => {

			const formData = new FormData()
			formData.append('file', data.file[0])
			formData.append('type', data.type)
			formData.append('id', data.id)
			return AdminService.postPicture(formData)
		},
		{
			onError(error) {
				toastError('Ошибка при загрузке слайдера')
			},
			onSuccess() {
				toast.success('Слайдер загружен успешно')
			},
		},
	)

	return {createAsync, isLoading, status }
}