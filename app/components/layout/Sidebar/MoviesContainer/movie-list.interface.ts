import { IMoviePortal } from '../../../../shared/types/movie.types'

export interface IMovieListPortal {
	title: string
	link: string
	movies: IMoviePortal[]
}
