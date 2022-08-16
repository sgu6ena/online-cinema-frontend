import Settings from '../../app/components/screens/settings/Settings'
import { NextPage } from 'next'
import Devices from '../../app/components/screens/settings/devices/Devices'

const DevicesPage: NextPage = () => {
	return <Settings><Devices/></Settings>
}


export default DevicesPage