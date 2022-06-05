import axios, {axiosClassicPortal} from './interceptors'
import {IUserData} from '../components/screens/profile/user.interface'
import {IGalleryHome} from '../components/ui/gallery/gallery.interface'
import { APP_URL_PORTAL, getCategoryUrl } from '../config/api-portal.config'
import { IGenrePortal, IMoviePortalPerPage } from '../shared/types/movie.types'
import {ISlide} from '../components/ui/slider/slider.interface'
import {getMoviesUrl} from '../config/api.config'

interface IMain {
    status: number
    success: boolean
    data: IGalleryHome[]
}

export const PortalService = {
    async getAll() {
        const data = await axiosClassicPortal.get<IMoviePortalPerPage>(
            getCategoryUrl('102/60'),
        )
        return data.data.data.items
    },

    async getCategory(
        slug: string | undefined = '0',
        page = '1',
    ) {
        const data = await axiosClassicPortal.get<IMoviePortalPerPage>(
            getCategoryUrl(slug) + '/20',
            {
                params: {
                    page: page ? page.toString() : '1',
                },
            },
        )
        return data
    },

    async getBookmark (page:string='1'){
        const data = await axios.get(`bookmark/20`, {
            params: {
                page: page ? page : '1',
            },
        })
        return data.data
    },

    async getMain() {
        const data = await axiosClassicPortal.get<IMain>('/main')
        const slides: ISlide[] = data.data.data[0].items.map((m: any) => ({
            _id: m.id,
            bigPoster: m.logo,
            link: getMoviesUrl(m.id),
            title: m.title,
        }))
        return {
            slider: slides,
            collections: data.data.data.filter((item) => item.viewport === 0.3),
        }
    },

    async getProfile() {
        const data = await axios.get<IUserData>('/getUserProfile')
        return data?.data.data
    },


    async getGenres() {
        return axios.get<IGenrePortal[]>(APP_URL_PORTAL+'/listGenre')
    },


}