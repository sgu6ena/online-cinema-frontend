import { FC } from 'react'

import Meta from '../../../utils/meta/Meta'
import Heading from '../../ui/heading/Heading'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
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
		</>
	)
}

export default Home
