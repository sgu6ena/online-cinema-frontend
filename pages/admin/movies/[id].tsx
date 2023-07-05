import { NextPage } from 'next'
import MovieEdit from '../../../app/components/screens/admin/movies/edit'
import Admin from '@/screens/admin/admin'

const MovieEditPage: NextPage = () => {
	return <Admin>
		<MovieEdit />
	</Admin>

}

export default MovieEditPage
