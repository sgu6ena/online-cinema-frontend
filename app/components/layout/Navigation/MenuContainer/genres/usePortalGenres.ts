import { useQuery } from 'react-query'
import { getGenreUrl } from '../../../../../config/url.config'

import { IMenuItem } from '../menu.interface'
import { GenreService } from '../../../../../services/genre.service'

export const usePortalGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getPortal(),
		{
			select: ({ data }) =>
				data.filter((genre: { type: number }) => genre.type === 3).sort((i, j) => (parseInt(i.cid) - parseInt(j.cid)))
					.map(
						(genre: any) =>
							({
								title: genre.title,
								link: getGenreUrl(genre.cid),
								icon: 'MdApi',
							} as IMenuItem),
					),
		},
	)

	return queryData

}