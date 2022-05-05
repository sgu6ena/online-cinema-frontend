import { FC } from 'react'

import { IMoviePortal } from '../../../shared/types/movie.types'
import Meta from '../../../utils/meta/Meta'
import Gallery from '../../ui/gallery/Gallery'
import { IGalleryItem } from '../../ui/gallery/gallery.interface'
import Heading from '../../ui/heading/Heading'
import Subheading from '../../ui/heading/Subheading'
import Slider from '../../ui/slider/Slider'

import { IHome } from './home.interface'

const collectionsToItems = (items: IMoviePortal[]): IGalleryItem[] => {
	return [
		...items.map((i) => ({
			link: i.url,
			name: i.title,
			posterPath: i.logo,
		})),
	]
}
const Home: FC<IHome> = ({ slides, collections }) => {
	return (
		<>
			<Meta
				title="PORTAL"
				description="Фильмы на любой вкус, мультфильмы, популярные сериалы, новинки от ведущих мировых киностудий"
			></Meta>
			<Heading
				title="Онлайн-кинотеатр"
				className="text-gray-300 text-xl mb-8"
			/>
			<div> {slides.length && <Slider slides={slides} />}</div>
			{collections &&
				collections.map((c) => (
					<div className="my-10" key={c.сid}>
						<Subheading title={c.title} />
						<Gallery items={collectionsToItems(c.items)} />
					</div>
				))}
		</>
	)
}

export default Home
