import { IMoviePortal} from '../../../shared/types/movie.types'

export interface IGalleryItemProps {
  item: IMoviePortal
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
