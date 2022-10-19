import { getGenreUrl } from '../../config/url.config'
import { IMoviePortalFull } from '../../shared/types/movie.types'
import { getMoviesUrl } from '../../config/api.config'

export const getMoviesBread = (movie: IMoviePortalFull) => {
	let title = 'Фильмы'
	let genre = '100'
	if (movie.genre.find((item) => item.id == '39')) {
		genre = '39'
		title = 'Сериалы'
	} else if (movie.genre.find((item) => item.id == '20')) {
		genre = '20'
		title = 'Мультфильмы'
	}

	const br = [
		{
			title,
			to: getGenreUrl(genre),
		},
		{
			title: movie.title,
			to: getMoviesUrl(movie.id),
		},
	]
	return br
}
