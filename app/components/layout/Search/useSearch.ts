import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDubounce'
import { PortalService } from '../../../api/portal.service'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { asPath } = useRouter()
	useEffect(() => {
		setSearchTerm('')
	}, [asPath])

	const { isSuccess, data } = useQuery(
		['search movie list', debouncedSearch],
		() => PortalService.getSearch(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch,
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { isSuccess, handleSearch, data, searchTerm }
}
