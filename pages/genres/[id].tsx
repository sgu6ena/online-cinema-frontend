import {  NextPage } from 'next'


import CatalogPortal from '../../app/components/screens/genre/CatalogPortal'
import {
	IMoviePortalPerPage,
} from '../../app/shared/types/movie.types'

const FreshPage: NextPage = () => {
	return (
		<CatalogPortal/>
	)
}

// export const getServerSideProps: GetServerSideProps = async ({
// 	query: { page },
// 	params,
// }) => {
// 	try {    // @ts-ignore
// 		const data = await PortalService.getCategory(params?.id, page)
//
// 		return {
// 			props: {
// 				data: data.data,
// 			},
// 		}
// 	} catch (error) {
// 		return {
// 			notFound: true,
// 		}
// 	}
// }

export default FreshPage
