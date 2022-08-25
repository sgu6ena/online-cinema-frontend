import { NextPage } from 'next'

import Admin from '../../app/components/screens/admin/admin'
import Movies from '../../app/components/screens/admin/movies/movies'

const MoviesPage: NextPage = () => {
	return (
		<Admin>
			<Movies />
		</Admin>
	)
}

export default MoviesPage
