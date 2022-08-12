import Settings from '../../app/components/screens/settings/Settings'
import { NextPage } from 'next'
import Subscriptions from '../../app/components/screens/settings/subscriptions/Subscriptions'


const SubscriptionsPage: NextPage = () => {
	return <Settings><Subscriptions/></Settings>
}


export default SubscriptionsPage
