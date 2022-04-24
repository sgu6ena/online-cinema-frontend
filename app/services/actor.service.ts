import axios, {axiosClassic} from '../api/interceptors'
import {getActorUrl} from '../config/api.config'
import {IActor} from '../shared/types/movie.types'
import {IActorEditInput} from "../components/screens/admin/actor/actor-edit.interface";


export const ActorService = {
    async getAll(searchTerm?: string) {
        return axiosClassic.get<IActor[]>(getActorUrl(``), {
            params: searchTerm
                ? {
                    searchTerm,
                }
                : {},
        })
    },

    async create() {
        return axios.post<string>(getActorUrl(``))
    },

    async delete(_id: string) {
        return axios.delete<string>(getActorUrl(`/${_id}`))
    },

    async getById(id: string) {
        return axios.get<IActorEditInput>(getActorUrl(`/${id}`))
    },
    async update(_id: string, data: IActorEditInput) {
        return axios.put<string>(getActorUrl(`/${_id}`), data)
    },
}
