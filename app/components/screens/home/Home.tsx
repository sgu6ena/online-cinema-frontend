import { FC, useEffect, useLayoutEffect } from 'react'

import HomeLoading from '@/components/loaders/HomeLoading'

import Collection from '@/ui/collections/Collection'
import GenresSlider from '@/ui/genres/GenresSlider'
import Slider from '@/ui/sliderMain/slider'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useHome } from '@/hooks/useHome'

import { IMoviePortal } from '@/shared/types/movie.types'

import Meta from '@/utils/meta/Meta'

import styles from './Home.module.scss'
import { IHome } from './home.interface'

export const collectionsToItems = (items: IMoviePortal[]): IMoviePortal[] => {
	return [...items]
}

const Home: FC<IHome> = () => {
	const { isLoading, slides, collections, genres, genresCollections } =
		useHome()
	const { getMainHome, getFavoritesIds } = useActions()

	const { user } = useAuth()

	useEffect(() => {
		getMainHome()
	}, [])

	useLayoutEffect(() => {
		if (user) {
			getFavoritesIds()
		}
	}, [user])

	const isSlides = !isLoading && slides.length > 0
	const isCollections = !isLoading && collections
	const isGenres = !isLoading && genres[0] && genres[0].items && genres[0].items.length > 0
	const isGenresCollections = !isLoading && genresCollections

	return (
		<>
			<Meta
				title='PORTAL'
				description='Фильмы на любой вкус, мультфильмы, популярные сериалы, новинки от ведущих мировых киностудий'
				image={'/images/smart/main.png'}
			></Meta>

			{isLoading && <HomeLoading />}

			{isSlides && <div className={styles.mainSlider}><Slider slides={slides} /></div>}

			{isCollections && collections.map((c) => <Collection collection={c} key={c.title} />)}

			{isGenres && <GenresSlider genres={genres[0]} />}

			{isGenresCollections && genresCollections.map((c) => <Collection collection={c} key={c.title} />)}
		</>
	)
}

export default Home
