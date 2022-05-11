import { GetServerSideProps, GetStaticProps, NextPage } from 'next'

import CatalogPortal from '../app/components/ui/catalog-movies/CatalogPortal'
import { PortalService } from '../app/services/portal.service'
import { IMoviePortalPerPage } from '../app/shared/types/movie.types'

const FreshPage: NextPage<{ data: IMoviePortalPerPage }> = ({ data }) => {
	return (
		<CatalogPortal
			title="Новинки"
			data={data || []}
			currentPage={data.pagination.currentPage}
		/>
	)
}

export const getServerSideProps: GetServerSideProps = async ({
	query: { page },
}) => {
	try {
		const data = await PortalService.getCategory('100', page)
		return {
			props: {
				data: data.data,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default FreshPage
