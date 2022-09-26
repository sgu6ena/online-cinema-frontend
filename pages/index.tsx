import type { NextPage } from 'next'

import Home from '../app/components/screens/home/Home'
import dynamic from 'next/dynamic'

const DynamicHome = dynamic(
	() => import('../app/components/screens/home/Home'),
	{
		ssr: true
	},
)
const HomePage: NextPage = () => {
	return <DynamicHome />
}

export default HomePage
