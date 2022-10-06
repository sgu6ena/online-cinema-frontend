import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicHome = dynamic(
	() => import('../app/components/screens/home/Home'),
	{
		ssr: true,
	},
)
const HomePage: NextPage = () => {
	return <DynamicHome />
}

export default HomePage
