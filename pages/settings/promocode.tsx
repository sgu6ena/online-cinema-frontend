// import { NextPage } from 'next'
//
// import Settings from '../../app/components/screens/settings/Settings'
// import PromoCode from '../../app/components/screens/settings/promocode/Promocode'
//
// const PromoCodePage: NextPage = () => {
// 	return (
// 		<Settings>
// 			<PromoCode />
// 		</Settings>
// 	)
// }
//
// export default PromoCodePage


import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PromoCodePage: NextPage = () => {
	const router = useRouter()

	useEffect(() => {
		router.replace('/settings')
	}, [])

	return null
}



export default PromoCodePage
