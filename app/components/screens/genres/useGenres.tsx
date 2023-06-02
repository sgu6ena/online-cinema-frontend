import { useQuery } from 'react-query'

import { PortalService } from '../../../api/portal.service'
import { IGenrePortal } from '@/shared/types/movie.types'


export const useGenres = () => {

	const { isLoading, data } = useQuery(
		'popular genre menu',
		() => PortalService.getGenres(),
		{
			onSuccess: (data) => data.data.sort((i, j) => (parseInt(i.cid) - parseInt(j.cid))),
		},
	)

	const genres = data?.data.filter(i => i.type === 1) || []
	const collections = data?.data.filter(i => i.type === 3) || []
	const banner:IGenrePortal = {title:'БАННЕР', cid:'103', type:3}
	return { genres, collections, isLoading, banner }

}