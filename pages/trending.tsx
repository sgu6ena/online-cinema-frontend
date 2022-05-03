import {GetServerSideProps, GetStaticProps, NextPage} from 'next'


import {IMovie, IMoviePortal, IMoviePortalPerPage} from '../app/shared/types/movie.types'
import {PortalService} from "../app/services/portal.service";
import CatalogPortal from "../app/components/ui/catalog-movies/CatalogPortal";
import {useRouter} from "next/router";

const FreshPage: NextPage<{ data: IMoviePortalPerPage }> = ({data}) => {


    return <CatalogPortal title="Смотрят сейчас" data={data || []} currentPage={data.pagination.currentPage}/>
}

export const getServerSideProps: GetServerSideProps = async ({query: {page = 1}}) => {

    try {
        const data = await PortalService.getCategory('102', page)

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
