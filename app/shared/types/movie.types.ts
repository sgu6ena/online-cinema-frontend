import { IGalleryHome } from '@/ui/gallery/gallery.interface'

export interface IMainGenreItem {
	id: number
	title: string
	url: string
	color: string
}
export interface IMainGenres {
	autoplay: boolean
	infinite: boolean
	items: IMainGenreItem[]
	title: string
	viewport: number
	cid:number
}
export interface IGenrePortal {
	cid: string
	title: string
	type: 0 | 1 | 2 | 3
}

export interface IGenre {
	name: string
	id: string
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
		chunk:number
		isActive?: boolean
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
	genre: IGenre[]
	rate_age: string
	rate_kp: number
	rate_imdb: number
	vote: IVotePortal
	season?:number
	episode?:number
	cnt?:number
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
	list: IGalleryHome[]
	my_vote: 0 | 1 | 2 | 3
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

export interface ISearch{
	status: number
	success: boolean
	data:IMoviePortal[]
	pagination: IPagination
}


export interface IPagination {
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
