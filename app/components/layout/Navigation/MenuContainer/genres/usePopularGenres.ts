import { useQuery } from 'react-query'

import { getGenreUrl } from '../../../../../config/url.config'
import { GenreService } from '../../../../../services/genre.service'
import { IMenuItem } from '../menu.interface'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre) =>
							({
								title: genre.name,
								link: getGenreUrl(genre.slug),
								icon: genre.icon,
							} as IMenuItem)
					)
					.splice(0, 4),

			onError(error) {
				//TODO: errors
			},
		}
	)

	return queryData
}

