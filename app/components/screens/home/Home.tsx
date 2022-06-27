import { FC, useEffect } from 'react'

import { getMoviesUrl } from '../../../config/api.config'
import { useActions } from '../../../hooks/useActions'
import { useHome } from '../../../hooks/useHome'
import { IMoviePortal } from '../../../shared/types/movie.types'
import Meta from '../../../utils/meta/Meta'
import HomeLoading from '../../loaders/HomeLoading'
import SliderMain from '../../ui/SliderMain/slider'
import Collection from '../../ui/collections/Collection'
import { IGalleryItem } from '../../ui/gallery/gallery.interface'

import styles from './Home.module.scss'
import { IHome } from './home.interface'

export const collectionsToItems = (items: IMoviePortal[]): IGalleryItem[] => {
	return [
		...items.map((i) => ({
			link: getMoviesUrl(i.id),
			name: i.title,
			posterPath: i.logo,
			title: i.title,
			year: i.year,
			genres: i.genre,
			age: i.rate_age,
		})),
	]
}
const Home: FC<IHome> = () => {
	const { isLoading, slides, collections, genres, genresCollections } = useHome()
	const { getMainHome } = useActions()

	useEffect(() => {
		getMainHome()
	}, [])

	return (
		<>
			<Meta
				title='PORTAL'
				description='Фильмы на любой вкус, мультфильмы, популярные сериалы, новинки от ведущих мировых киностудий'
			></Meta>

			{isLoading && <HomeLoading />}
			<div className={styles.mainSlider}>
				{!isLoading && slides.length && <SliderMain slides={slides} />}
			</div>

			{!isLoading && collections &&
				collections.map((c) => <Collection collection={c} key={c.title} />)}

			{!isLoading && collections &&
				genresCollections.map((c) => <Collection collection={c} key={c.title} />)}
		</>
	)
}

export default Home
