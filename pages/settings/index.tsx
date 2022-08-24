import Settings from '../../app/components/screens/settings/Settings'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { LINKS } from '../../app/config/links'
import { useEffect } from 'react'

const SettingsPage: NextPage = () => {
	const {push} = useRouter()
	useEffect(()=>{push(LINKS.SUBSCRIPTIONS)},[])

	return <Settings/>
}


export default SettingsPage
