import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import CatalogPortal from '../app/components/ui/catalog-movies/CatalogPortal'
import { PortalService } from '../app/services/portal.service'
import {
	IMovie,
	IMoviePortal,
	IMoviePortalPerPage,
} from '../app/shared/types/movie.types'

const FreshPage: NextPage<{ data: IMoviePortalPerPage }> = ({ data }) => {
	return (
		<CatalogPortal
			title="Смотрят сейчас"
			data={data || []}
			currentPage={data.pagination.currentPage}
		/>
	)
}

export const getServerSideProps: GetServerSideProps = async ({
	query: { page },
}) => {
	try {
		const data = await PortalService.getCategory('102', page)
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
