import { FC } from 'react'

import { getMoviesUrl } from '../../../config/api.config'
import { IMoviePortal } from '../../../shared/types/movie.types'
import Meta from '../../../utils/meta/Meta'
import Gallery from '../../ui/gallery/Gallery'
import { IGalleryItem } from '../../ui/gallery/gallery.interface'
import Subheading from '../../ui/heading/Subheading'
import Slider from '../../ui/slider/Slider'

import { IHome } from './home.interface'

const collectionsToItems = (items: IMoviePortal[]): IGalleryItem[] => {
	return [
		...items.map((i) => ({
			link: getMoviesUrl(i.id),
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
			{/*<Heading*/}
			{/*	title="Онлайн-кинотеатр"*/}
			{/*	className="text-gray-300 text-xl mb-8"*/}
			{/*/>*/}
			{slides.length && <Slider slides={slides} />}
			{collections &&
				collections.map((c) => (
					<div className="my-10 px-layout " key={c.cid}>
						<Subheading title={c.title} />
						<Gallery items={collectionsToItems(c.items)} />
					</div>
				))}
		</>
	)
}

export default Home
