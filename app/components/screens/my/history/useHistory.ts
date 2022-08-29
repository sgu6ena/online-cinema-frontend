import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { PortalService } from '../../../../api/portal.service'
import { useAuth } from '../../../../hooks/useAuth'
import { IMovie, IPagination } from '../../../../shared/types/movie.types'
import { toastError } from '../../../../utils/toast-error'

export const useHistory = () => {
	const { user } = useAuth()
	const { query } = useRouter()
	const page = String(query?.page)
	const isUser = !!user

	const { isLoading, data } = useQuery(
		['get history', page],
		() => PortalService.getHistory(page),
		{
			onSuccess: (data) => {
				return data.data
			},
			onError: (e) => {
				toastError(e, 'get history')
			},
			enabled: isUser,
		}
	)
	const movies = data?.data?.map((item:any)=>{
		if (item.episode>0 && item.genre[0].name!=`Сезон ${item.season} · Серия ${item.episode}`)
			item.genre.unshift( {name:`Сезон ${item.season} · Серия ${item.episode}`})
		return	item
	})

	const pagination = data?.pagination as IPagination
	return { isLoading, movies, pagination, isUser }
}
