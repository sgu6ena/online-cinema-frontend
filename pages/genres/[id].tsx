import {  NextPage } from 'next'
import dynamic from 'next/dynamic'


const DynamicCatalogPortal = dynamic(() => import('../../app/components/screens/genre/CatalogPortal'), {
	ssr: false
})



import CatalogPortal from '../../app/components/screens/genre/CatalogPortal'

const FreshPage: NextPage = () => {
	return (
		<DynamicCatalogPortal/>
	)
}



export default FreshPage
