import { IMovie, IMoviePortal } from '../../../../shared/types/movie.types'

export interface IMovieList {
	title: string
	link: string
	movies: IMovie[]
}

export interface IMovieListPortal {
	title: string
	link: string
	movies: IMoviePortal[]
}
