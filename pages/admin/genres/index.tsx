import { NextPage } from 'next'

import Admin from '@/screens/admin/admin'
import Genres from '@/screens/admin/genres/genres'

const GenresPage: NextPage = () => {
	return (
		<Admin>
			<Genres />
		</Admin>
	)
}

export default GenresPage
