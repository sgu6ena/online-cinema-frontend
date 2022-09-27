import { FC, useEffect } from 'react'
import { useActions } from '../../../hooks/useActions'
import { useHome } from '../../../hooks/useHome'
import Meta from '../../../utils/meta/Meta'
import HomeLoading from '../../loaders/HomeLoading'
import SliderMain from '../../ui/SliderMain/slider'
import Collection from '../../ui/collections/Collection'


import styles from './Home.module.scss'
import { IHome } from './home.interface'
import GenresSlider from '../../ui/genres/GenresSlider'

const Home: FC<IHome> = () => {
	const { isLoading, slides, collections, genres, genresCollections } = useHome()
	const { getMainHome } = useActions()

	useEffect(() => {
		getMainHome()
	}, [])

	return (
		<Meta
			title='PORTAL'
			description='Фильмы на любой вкус, мультфильмы, популярные сериалы, новинки от ведущих мировых киностудий'
			image={'https://idc.md/storage/app/media/images/banners/portal/main.png'}
		>
			{isLoading ? <HomeLoading /> :
				<>
					{slides.length > 0 ?
						<div className={styles.mainSlider}>
							<SliderMain slides={slides} />
						</div> : null}

					{collections ?
						collections.map((c) => <Collection collection={c} key={c.title} />) : <></>}
					{genres[0] && genres[0].items && genres[0].items.length ? (
						<GenresSlider genres={genres[0]} />
					) : null}
					{
						genresCollections ?
							genresCollections.map((c) => (
								<Collection collection={c} key={c.title} />
							)) : null}</>}
		</Meta>
	)
}

export default Home
