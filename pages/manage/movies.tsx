
import { FC } from 'react'
import AdminNavigation from '../../app/components/ui/admin-navigation/AdminNavigation'
import Heading from '../../app/components/ui/heading/Heading'
import { NextPageAuth } from '../../app/shared/types/auth.types'

const MoviesPage: NextPageAuth = () => {
	return (
		<div>			<AdminNavigation />
			<Heading title={'Фильмы'}/>
		</div>
	)
}

export default MoviesPage