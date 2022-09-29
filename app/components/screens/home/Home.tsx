import {FC, useEffect} from 'react'

import {getMoviesUrl} from '../../../config/api.config'
import {useActions} from '../../../hooks/useActions'
import {useHome} from '../../../hooks/useHome'
import {IMoviePortal} from '../../../shared/types/movie.types'
import Meta from '../../../utils/meta/Meta'
import HomeLoading from '../../loaders/HomeLoading'
import SliderMain from '../../ui/SliderMain/slider'
import Collection from '../../ui/collections/Collection'

import styles from './Home.module.scss'
import {IHome} from './home.interface'
import GenresSlider from '../../ui/genres/GenresSlider'

export const collectionsToItems = (items: IMoviePortal[]): IMoviePortal[] => {
  return [	...items	]
}

const Home: FC<IHome> = () => {
  const {isLoading, slides, collections, genres, genresCollections} =
    useHome()
  const {getMainHome} = useActions()

  useEffect(() => {
    getMainHome()
  }, [])

  return (
    <>
      <Meta
        title="PORTAL"
        description="Фильмы на любой вкус, мультфильмы, популярные сериалы, новинки от ведущих мировых киностудий"
        image={'/smart/main.png'}
      ></Meta>

      {isLoading && <HomeLoading/>}
      <div className={styles.mainSlider}>
        {!isLoading && slides.length>0 && <SliderMain slides={slides}/>}
      </div>

      {!isLoading &&
        collections &&
        collections.map((c) => <Collection collection={c} key={c.title}/>)}
      {!isLoading && genres[0] && genres[0].items && genres[0].items.length>0 && (
        <GenresSlider genres={genres[0]}/>
      )}
      {!isLoading &&
        genresCollections &&
        genresCollections.map((c) => (
          <Collection collection={c} key={c.title}/>
        ))}
    </>
  )
}

export default Home
