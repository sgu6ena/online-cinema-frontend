import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import My from '../../app/components/screens/my/My'

const DynamicFavorites = dynamic(
	() => import('../../app/components/screens/my/favorites/favorites'),
	{
		ssr: false,
	}
)

const FavoritesPage: NextPage = () => {
	return (
		<My>
			<DynamicFavorites />
		</My>
	)
}

export default FavoritesPage
