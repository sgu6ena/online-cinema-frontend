import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { PortalService } from '../../../../api/portal.service'
import { useAuth } from '../../../../hooks/useAuth'
import { IMoviePortal, IPagination } from '../../../../shared/types/movie.types'
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
				toastError(e)
			},
			enabled: isUser,
		},
	)
	const movies = data?.data
	// const movies = data?.data?.map((item: IMoviePortal) => {
	// 	const seasonEpisode = `Сезон ${item.season} · Серия ${item.episode}`
	// 	if (item?.episode && item?.episode > 0 && item.genre[0].name !== seasonEpisode)
	// 		item.genre.unshift({ name: seasonEpisode, id:'99999' })
	//
	// 	return item
	// })

	const pagination = data?.pagination as IPagination
	return { isLoading, movies, pagination, isUser }
}
