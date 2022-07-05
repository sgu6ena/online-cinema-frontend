import {IGenre, IMoviePortal} from '../../../shared/types/movie.types'

export interface IGalleryItem {
  posterPath: string
  name: string
  link: string
  year?: number
  title?: string
  age?: string
  genres?: IGenre[]
  access?: 0 | 1 | 2
  rate_kp?: number
  rate_imdb?: number
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
  cid: number
  autoplay: boolean
  infinite: boolean
  viewport: number
  items: IMoviePortal[]
}
