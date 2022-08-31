import { NextPage } from 'next'

import Settings from '../../app/components/screens/settings/Settings'
import Devices from '../../app/components/screens/settings/devices/Devices'

const DevicesPage: NextPage = () => {
	return (
		<Settings>
			<Devices />
		</Settings>
	)
}

export default DevicesPage
