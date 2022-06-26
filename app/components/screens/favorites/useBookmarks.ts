import { toastError } from '../../../utils/toast-error'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { PortalService } from '../../../api/portal.service'
import { IPagination } from '../../../shared/types/movie.types'
import { useAuth } from '../../../hooks/useAuth'

export const useBookmarks = () => {
	const { user } = useAuth()
	const { query } = useRouter()
	const page = String(query?.page)
	const isUser = !!user

	const { isLoading, data } = useQuery(
		['get bookmark', page],
		() => PortalService.getBookmark(page),
		{
			onSuccess: (data) => {
				return data.data
			},
			onError: (e) => {
				toastError(e, 'get bookmark')
			},
			enabled: isUser,
		},
	)
	const movies = data?.data
	const pagination = data?.pagination as IPagination


	return { isLoading, movies, pagination, isUser }
}


