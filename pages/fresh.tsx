import {GetStaticProps, NextPage} from 'next'


import {IMovie, IMoviePortal, IMoviePortalPerPage} from '../app/shared/types/movie.types'
import {PortalService} from "../app/services/portal.service";
import CatalogPortal from "../app/components/ui/catalog-movies/CatalogPortal";

const FreshPage: NextPage<{ data: IMoviePortalPerPage }> = ({data}) => {
    return <CatalogPortal title="Новинки" data={data || []} currentPage={1}/>
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const data = await PortalService.getAll()

        return {
            props: {
                data: data.data
            },
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}

export default FreshPage
