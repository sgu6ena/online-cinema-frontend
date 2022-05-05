import { IMoviePortal } from '../../../shared/types/movie.types'

export interface IGalleryItem {
	posterPath: string
	name: string
	link: string
	content?: {
		title: string
		subTitle?: string
	}
}

export interface IGalleryItemProps {
	item: IGalleryItem
	variant: 'vertical' | 'horizontal'
}

export interface IGalleryHome {
	title: string
	сid: number
	autoplay: boolean
	infinite: boolean
	items: IMoviePortal[]
}
