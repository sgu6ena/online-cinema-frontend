import {axiosClassic, axiosClassicPortal} from "../api/interceptors";

import {IMoviePortalPerPage} from "../shared/types/movie.types";
import {getСategoryUrl} from "../config/api-portal.config";


export const PortalService = {
    async getAll() {
        const data = await axiosClassicPortal.get<IMoviePortalPerPage>(getСategoryUrl('100'))
        return data
    },

    async getCategory(slug: string, page: string | string[] | undefined) {
        const data = await axiosClassicPortal.get<IMoviePortalPerPage>(getСategoryUrl(slug), {
            params: {
                page: page.toString()
            }
        })
        return data
    },

    // async getAll() {
    //     const {data: {data: {items: movies}}} = await axiosClassic.get<IMoviePortalPerPage>(
    //         'https://api.portal.idc.md/api/file/category/100'
    //     )
    //     return movies
    // },
}