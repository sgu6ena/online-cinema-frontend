import { FC } from 'react'

import Meta from '../../../utils/meta/Meta'
import Heading from '../../ui/heading/Heading'
import Slider from '../../ui/slider/Slider'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ slides }) => {
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

			{/*<div className='my-10'>*/}
			{/*    <Subheading title="Популярно сейчас"/>*/}
			{/*    {trendingMovies.length && <Gallery items={trendingMovies}/>}*/}
			{/*</div>*/}

			{/*<div className='my-10'>*/}
			{/*    <Subheading title="Лучшие актеры"/>*/}
			{/*    {actors.length && <Gallery items={actors}/>}*/}
			{/*</div>*/}
		</>
	)
}

export default Home
