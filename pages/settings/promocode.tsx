import { NextPage } from 'next'

import Settings from '../../app/components/screens/settings/Settings'
import PromoCode from '../../app/components/screens/settings/promocode/Promocode'

const PromoCodePage: NextPage = () => {
	return (
		<Settings>
			<PromoCode />
		</Settings>
	)
}

export default PromoCodePage
