import { NextPage } from 'next'

import Admin from '../../app/components/screens/admin/admin'
import Genres from '../../app/components/screens/admin/genres/genres'

const GenresPage: NextPage = () => {
	return (
		<Admin>
			<Genres />
		</Admin>
	)
}

export default GenresPage
