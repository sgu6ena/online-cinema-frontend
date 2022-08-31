import { NextPage } from 'next'

import Settings from '../../app/components/screens/settings/Settings'
import Account from '../../app/components/screens/settings/account/Account'

const AccountPage: NextPage = () => {
	return (
		<Settings>
			<Account />
		</Settings>
	)
}

export default AccountPage
