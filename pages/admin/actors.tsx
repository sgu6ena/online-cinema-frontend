import { NextPage } from 'next'

import Actors from '../../app/components/screens/admin/actors/actors'
import Admin from '../../app/components/screens/admin/admin'


const ActorsPage: NextPage = () => {
	return (
		<Admin>
			<Actors />
		</Admin>
	)
}

export default ActorsPage
