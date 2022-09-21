import { NextPage } from 'next'

import Settings from '../../app/components/screens/settings/Settings'

import dynamic from 'next/dynamic'
const DynamicAccount = dynamic(
	() => import('../../app/components/screens/settings/account/Account'),
	{
		ssr: false,
	}
)
const AccountPage: NextPage = () => {
	return (
		<Settings>
			<DynamicAccount />
		</Settings>
	)
}

export default AccountPage
