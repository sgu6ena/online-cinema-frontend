import { NextPage } from 'next'

import Admin from '../../../app/components/screens/admin/admin'

import dynamic from 'next/dynamic'
const DynamicMovies = dynamic(
	() => import('../../../app/components/screens/admin/movies/movies'),
	{
		ssr: false,
	}
)
const MoviesPage: NextPage = () => {
	return (
		<Admin>
			<DynamicMovies />
		</Admin>
	)
}

export default MoviesPage
