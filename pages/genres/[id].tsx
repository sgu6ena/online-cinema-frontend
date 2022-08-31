import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const DynamicCatalogPortal = dynamic(
	() => import('../../app/components/screens/genre/CatalogPortal'),
	{
		ssr: false,
	}
)

const FreshPage: NextPage = () => {
	return <DynamicCatalogPortal />
}

export default FreshPage
