export interface IGaleryItem {
	posterPath: string
	name: string
	link: string
	content?: {
		title: string
		subTitle?: string
	}
}

export interface IGaleryItemProps {
	item: IGaleryItem
	variant: 'vertical' | 'horizontal'
}
