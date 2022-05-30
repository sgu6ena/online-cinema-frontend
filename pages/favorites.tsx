import type { NextPage } from 'next'


import dynamic from 'next/dynamic'


const DynamicFavorites = dynamic(() => import('../app/components/screens/favorites/favorites'),{
	ssr: false,
})

const FavoritesPage: NextPage = () => {
	return <DynamicFavorites />
}

export default FavoritesPage
