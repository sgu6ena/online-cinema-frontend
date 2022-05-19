import {  NextPage } from 'next'


import CatalogPortal from '../../app/components/ui/catalog-movies/CatalogPortal'
import {
	IMoviePortalPerPage,
} from '../../app/shared/types/movie.types'

const FreshPage: NextPage<{ data: IMoviePortalPerPage }> = ({ data }) => {
	return (
		<CatalogPortal
			title={data.data.title}
			data={data || []}
			currentPage={data.pagination.currentPage}
		/>
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
