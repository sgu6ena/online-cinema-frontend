import { IGalleryHome } from '@/ui/gallery/gallery.interface'
import { ISlide } from '@/ui/slider/slider.interface'

export interface IHome {
	slides?: ISlide[]
	collections?: IGalleryHome[]
}
