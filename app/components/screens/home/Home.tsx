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
			></Meta>{' '}
			<Heading
				title="Онлайн-кинотеатр"
				className="text-gray-300 mb-8 text-xl"
			/>
			{slides.length && <Slider slides={slides} />}
		</>
	)
}

export default Home
