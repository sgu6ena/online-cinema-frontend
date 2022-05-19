import Link from 'next/link'
import { FC } from 'react'

import { getMoviesUrl } from '../../../config/api.config'
import { getGenreUrl } from '../../../config/url.config'
import { IMoviePortal } from '../../../shared/types/movie.types'
import Meta from '../../../utils/meta/Meta'
import Gallery from '../../ui/gallery/Gallery'
import { IGalleryItem } from '../../ui/gallery/gallery.interface'
import Subheading from '../../ui/heading/Subheading'
import Slider from '../../ui/slider/Slider'

import { IHome } from './home.interface'
import { usePortalSlides } from './usePortalSlides'
import HomeLoading from './HomeLoading'

const collectionsToItems = (items: IMoviePortal[]): IGalleryItem[] => {
	return [
		...items.map((i) => ({
			link: getMoviesUrl(i.id),
			name: i.title,
			posterPath: i.logo,
		})),
	]
}
const Home: FC<IHome> = () => {

	const { isLoading, slides, collections } = usePortalSlides()

	return (
		<>
			<Meta
				title='PORTAL'
				description='Фильмы на любой вкус, мультфильмы, популярные сериалы, новинки от ведущих мировых киностудий'
			></Meta>
			{isLoading && <HomeLoading />}
			{!isLoading && slides && <Slider slides={slides} />}

			{collections &&
				collections.map((c) => (
					<div className='my-10 px-layout ' key={c.cid}>
						<div className={'flex-center-between'}>
							<Subheading title={c.title} />
							<Link href={getGenreUrl(c.cid.toString())}>
								<a>
									<button className='btn-primary px-5 py-2 mb-5'>
										Смотреть все
									</button>
								</a>
							</Link>
						</div>
						<Gallery items={collectionsToItems(c.items)} />
					</div>
				))}
		</>
	)
}

export default Home
