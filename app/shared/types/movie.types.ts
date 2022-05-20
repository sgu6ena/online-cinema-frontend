import { TypeMaterialIconsName } from './icon.types'

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	icon: TypeMaterialIconsName
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IActor {
	_id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	parameters: IParameters
	genres: IGenre[]
	actors: IActor[]
	countOpened: number
	videoUrl: string
	rating: number
	slug: string
}

export interface IGenrePortal {
	name: string
	id: number
}

export interface IVotePortal {
	like: number
	dislike: number
	ats: number
}

export interface IPerson {
	name: string
	id: number
}

export interface IMedia {
	isActive?: boolean
	title: string
	items: {
		title: string
		file: number
	}[]
}

export interface IMoviePortal {
	id: string
	access: 0 | 1 | 2
	year: number
	title: string
	url: string
	country: string[]
	description: string
	logo: string
	genre: IGenrePortal[]
	rate_age: string
	rate_kp: number
	rate_imdb: number
	vote: IVotePortal
}

export interface IMoviePortalFull extends IMoviePortal {
	is_favorite: boolean
	media: IMedia[]
	review: string
	action: number
	auth: number
	auth_sub: number
	auth_paid: number
	screens: string[]
	in_the_roles: IPerson[]
	creator: IPerson[]
	producer: IPerson[]
	genreExt: []
	serial: boolean
	length: number
	trailer: string
	mbase_id: number
	type_content: number
	type_file: number
}

export interface IMoviePortalPage {
	status: number
	success: boolean
	data: IMoviePortalFull
}

export interface IMoviePortalPerPage {
	status: number
	success: boolean
	data: {
		title: string
		sortAvailable: boolean
		items: IMoviePortal[]
	}
	pagination: IPagination

}

export interface IPagination
{
	count: number
	total: number
	perPage: number
	currentPage: number
	totalPages: number
	links: {
		next?: string
		prev?: string
	}
}