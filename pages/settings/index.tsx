import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Settings from '../../app/components/screens/settings/Settings'
import { LINKS } from '../../app/config/links'

const SettingsPage: NextPage = () => {
	const { push } = useRouter()
	useEffect(() => {
		push(LINKS.SUBSCRIPTIONS)
	}, [])

	return <Settings />
}

export default SettingsPage
