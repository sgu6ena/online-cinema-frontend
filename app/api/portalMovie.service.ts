import axios, {  axiosClassicPortal } from './interceptors'
import {  getMovieUrl, sendBookmarkUrl, sendVoteUrl } from '../config/api-portal.config'
import {  IMoviePortalPage } from '../shared/types/movie.types'
import { getMoviesUrl } from '../config/api.config'

export const PortalMovieService = {
    async getById(id: string) {
        const data = await axios.get<IMoviePortalPage>(
            getMovieUrl(`${id}`),
        )
        return data.data
    },


    async getUrl(id: string) {
        const response = await axios.get(getMovieUrl(`url/${id}`))
        return response.data
    },

    async getSearch(str: string) {
        const data = await axiosClassicPortal.get(
            getMovieUrl(`find/12?id_sort=8&pid=all&query=${str}`),
        )
        return data.data
    },

    async sendBookmark(id: string) {
        const data = await axios.get<any>(
            sendBookmarkUrl(`${id}`),
        )
        return data.data
    },


    async sendVote(id: string, vote: number) {
        const data = await axios.get<any>(
            sendVoteUrl(`${id}`, vote),
        )
        return data.data
    },

    async create() {
        return axios.post<string>(getMoviesUrl(''))
    },

    async update(_id: string, data: any) {
        return axios.put<string>(getMoviesUrl(`/${_id}`), data)
    },

    async delete(_id: string) {
        return axios.delete<string>(getMoviesUrl(`/${_id}`))
    },


}
