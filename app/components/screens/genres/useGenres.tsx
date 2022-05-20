import { useQuery } from 'react-query'
import { GenreService } from '../../../services/genre.service'


export const useGenres = () => {

	const { isLoading, data } = useQuery(
		'popular genre menu',
		() => GenreService.getPortal(),
		{
			onSuccess: (data) => data.data.sort((i, j) => (parseInt(i.cid) - parseInt(j.cid))),
		},
	)

	const genres = data?.data.filter(i => i.type === 1) || []
	const collections = data?.data.filter(i => i.type === 3) || []
	return { genres, collections, isLoading }

}