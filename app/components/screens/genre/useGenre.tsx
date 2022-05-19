import { useRouter } from 'next/router'
import { useQuery } from 'react-query'


import { toastError } from '../../../utils/toast-error'
import { PortalService } from '../../../services/portal.service'
import { router } from 'next/client'
import pages from '../../../../pages'
import { useEffect } from 'react'

export const useGenre = () => {
	const { query } = useRouter()

	const handlePagination = (page: any) => {
		const path = router.pathname
		const query = router.query
		query.page = page.selected + 1
		router.push({
			pathname: path,
			query: query,
		})
	}
	const genreId = String(query.id)
	const page = String(query?.page)
	useEffect(()=>{},[page])


	const { isLoading, data } = useQuery(
		['жарны portal', genreId, pages],
		() => PortalService.getCategory(genreId, page),
		{
			onSuccess: (data) => data.data,
			onError: (e) => {
				toastError(e, 'get movie portal')
			},
			enabled: !!query.id,
		},
	)
	const title = data?.data.data.title
	const movies = data?.data.data.items
	const description = ''
	return { isLoading, data, title, movies, handlePagination, page }
}
