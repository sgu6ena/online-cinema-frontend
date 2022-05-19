import { useQuery } from 'react-query'

import { PortalService } from '../../../services/portal.service'
import { toastError } from '../../../utils/toast-error'
import { IMoviePortal } from '../../../shared/types/movie.types'
import { IGalleryItem } from '../../ui/gallery/gallery.interface'
import { getMoviesUrl } from '../../../config/api.config'


export const usePortalSlides = () => {
	const { isLoading, data } = useQuery(
		['slides portal'],
		() => PortalService.getMain(),
		{
			onSuccess: (data) => data,
			onError: (e) => {
				toastError(e, 'get portal slides')
			},
		},
	)

	return { isLoading, slides: data?.slider||[], collections: data?.collections }
}