import {axiosClassic} from '../api/interceptors'
import axios from '../api/interceptors'
import {IGenreEditInput} from '../components/screens/admin/genre/genre-edit.interface'
import {getGenresUrl} from '../config/api.config'
import {IGenre} from '../shared/types/movie.types'

export const GenreService = {
    async getPopularGenres() {
        return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'))
    },

    async getSearch(searchTerm?: string) {
        return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
            params: searchTerm
                ? {
                    searchTerm,
                }
                : {},
        })
    },

    async getById(id: string) {
        return axios.get<IGenreEditInput>(getGenresUrl(`/${id}`))
    },

    async getAll() {
        return axiosClassic.get<IGenre[]>(getGenresUrl(''))
    },

    async getPortal() {
        return axios.get('https://api.portal.idc.md/api/listGenre')
    },

    async delete(_id: string) {
        return axios.delete<string>(getGenresUrl(`/${_id}`))
    },

    async update(_id: string, data: IGenreEditInput) {
        return axios.put<string>(getGenresUrl(`/${_id}`), data)
    },
}
