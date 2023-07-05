import { NextPage } from 'next'

import GenreEdit from '@/screens/admin/genres/edit'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import React from 'react'
import Admin from '@/screens/admin/admin'

const MovieEditPage: NextPage = () => {

	return 	<Admin >
		<GenreEdit />
	</Admin>
}

export default MovieEditPage
