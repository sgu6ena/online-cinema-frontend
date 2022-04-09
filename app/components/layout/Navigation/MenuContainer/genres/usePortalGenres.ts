import { useQuery } from "react-query"
import { getGenreUrl } from "../../../../../config/url.config"
import { GenreService } from "../../../../../services/genre.service"
import { IMenuItem } from "../menu.interface"

export const usePortalGenres=()=>{
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getPortal(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre:any) =>
							({
								title: genre.title,
								link: getGenreUrl(genre.cid),
								icon: 'MdApi',
							} as IMenuItem)
					),

			onError(error) {
				//TODO: errors
			},
		}
	)

	return queryData

}