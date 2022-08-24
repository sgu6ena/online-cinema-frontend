import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { LINKS } from '../../app/config/links'
import My from '../../app/components/screens/my/My'

const MyPage: NextPage = () => {
	const { push } = useRouter()
	useEffect(() => {
		push(LINKS.FAVORITES)
	}, [])

	return <My/>
}

export default MyPage
