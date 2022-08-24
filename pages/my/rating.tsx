import type { NextPage } from 'next'
import My from '../../app/components/screens/my/My'
import Rating from '../../app/components/screens/my/rating/rating'


const RatingPage: NextPage = () => {
	return <My><Rating /></My>
}

export default RatingPage