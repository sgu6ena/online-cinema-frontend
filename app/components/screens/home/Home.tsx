import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '../../ui/MaterialIcon'

import { getMoviesUrl } from '../../../config/api.config'
import { getGenreUrl } from '../../../config/url.config'
import { IMoviePortal } from '../../../shared/types/movie.types'
import Meta from '../../../utils/meta/Meta'
import Gallery from '../../ui/gallery/Gallery'
import { IGalleryItem } from '../../ui/gallery/gallery.interface'
import Subheading from '../../ui/heading/Subheading'
import Slider from '../../ui/slider/Slider'

import HomeLoading from './HomeLoading'
import { IHome } from './home.interface'
import { usePortalSlides } from './usePortalSlides'
import SliderSwiper from '../../ui/sliderSwiper/slider'

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
			{/*<HomeLoading />*/}
			{isLoading && <HomeLoading />}
			{!isLoading && slides && <SliderSwiper slides={slides} />}
			{/*{!isLoading && slides && <Slider slides={slides} />}*/}

			{collections &&
				collections.map((c) => (
					<div className='my-10 px-2 lg:px-layout ' key={c.cid}>
						<div className={'flex-center-between'}>
							<Subheading title={c.title} />
							<Link href={getGenreUrl(c.cid.toString())}>
								<a>
									<button className='btn-primary flex-center-between  lg:px-5 px-2 py-2 mb-5'>
										<span className='hidden lg:inline'> Смотреть все</span>
										<MaterialIcon name='MdChevronRight' />
									</button>
								</a>
							</Link>
						</div>
						<Gallery items={collectionsToItems(c.items.filter(i => i.id))} />
					</div>
				))}
		</>
	)
}

export default Home
