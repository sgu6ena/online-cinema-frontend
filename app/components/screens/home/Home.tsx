import Link from 'next/link'
import { FC } from 'react'

import { getMoviesUrl } from '../../../config/api.config'
import { getGenreUrl } from '../../../config/url.config'
import { IMoviePortal } from '../../../shared/types/movie.types'
import Meta from '../../../utils/meta/Meta'
import MaterialIcon from '../../ui/MaterialIcon'
import SliderMain from '../../ui/SliderMain/slider'
import Gallery from '../../ui/gallery/Gallery'
import { IGalleryItem } from '../../ui/gallery/gallery.interface'
import Heading from '../../ui/heading/Heading'

import styles from './Home.module.scss'
import HomeLoading from '../../loaders/HomeLoading'
import { IHome } from './home.interface'
import { usePortalSlides } from './usePortalSlides'
import GallerySlider from '../../ui/gallery/GalerySlider'

export const collectionsToItems = (items: IMoviePortal[]): IGalleryItem[] => {
	return [
		...items.map((i) => ({
			link: getMoviesUrl(i.id),
			name: i.title,
			posterPath: i.logo,
			title: i.title,
			year: i.year,
			genres: i.genre,
			age:i.rate_age

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
			<div className={styles.mainSlider}>
				{!isLoading && slides && <SliderMain slides={slides} />}
			</div>

			{collections &&
				collections.map((c) => (
					<div className={styles.collectionsWrapper} key={c.cid}>
						<div className={styles.collection}>
							<Heading title={c.title} />
							<Link href={getGenreUrl(c.cid.toString())}>
								<a>
									<button>
										<span> Смотреть все</span>
										<MaterialIcon name='MdChevronRight' />
									</button>
								</a>
							</Link>
						</div>
						<GallerySlider
							items={collectionsToItems(c.items.filter((i) => i.id))} />
					</div>
				))}
		</>
	)
}

export default Home
