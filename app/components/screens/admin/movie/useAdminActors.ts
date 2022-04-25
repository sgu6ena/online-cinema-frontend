import {useQuery} from 'react-query'


import {toastError} from '../../../../utils/toast-error'
import {IOptions} from '../../../ui/form-elemets/select/select.interface'
import {ActorService} from "../../../../services/actor.service";

export const useAdminActors = () => {
    const queryData = useQuery('List of actors', () => ActorService.getAll(), {
        select: ({data}) =>
            data.map(
                (actor): IOptions => ({
                    label: actor.name,
                    value: actor._id,
                })
            ),

        onError: (error) => {
            toastError(error, 'Список актеров')
        },
    })

    return queryData
}
