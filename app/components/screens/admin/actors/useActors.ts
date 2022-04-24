import {ChangeEvent, useMemo, useState} from 'react'
import {useMutation, useQuery} from 'react-query'
import {toastr} from 'react-redux-toastr'

import {getAdminUrl} from '../../../../config/url.config'
import {useDebounce} from '../../../../hooks/useDubounce'
import {ActorService} from '../../../../services/actor.service'
import {toastError} from '../../../../utils/toast-error'
import {ITableItem} from '../../../ui/AdminTable/admin-table.interface'
import {useRouter} from "next/router";


export const useActors = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearch = useDebounce(searchTerm, 500)

    const queryData = useQuery(
        ['actors list', debouncedSearch],
        () => ActorService.getAll(debouncedSearch),
        {
            select: ({data}) =>
                data.map(
                    (actor): ITableItem => ({
                        _id: actor._id,
                        editUrl: getAdminUrl(`actor/edit/${actor._id}`),
                        items: [actor.name, actor.countMovies.toString()],
                    })
                ),

            onError: (error) => {
                toastError(error, 'Список актеров')
            },
        }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const {push} = useRouter()

    const {mutateAsync: createAsync} = useMutation(
        'create actor',
        () => ActorService.create(),
        {
            onError: (error) => {
                toastError(error, 'Создание актера')
            },
            onSuccess: ({data: _id}) => {
                toastr.success('Создание актера', 'Создание прошло успешно')
                push(getAdminUrl(`actor/edit/${_id}`))
            },
        }
    )

    const {mutateAsync: deleteAsync} = useMutation(
        ['delete actor', debouncedSearch],
        (actorId: string) => ActorService.delete(actorId),
        {
            onError: (error) => {
                toastError(error, 'Удаление актера')
            },
            onSuccess: () => {
                toastr.success('Удаление актера', 'удаление прошло успешно')
                queryData.refetch()
            },
        }
    )

    return useMemo(
        () => ({handleSearch, ...queryData, searchTerm, deleteAsync, createAsync}),
        [queryData, searchTerm, deleteAsync, createAsync]
    )
}
