import {useRouter} from 'next/router'
import {SubmitHandler, UseFormSetValue} from 'react-hook-form'
import {useMutation, useQuery} from 'react-query'
import {toastr} from 'react-redux-toastr'

import {getAdminUrl} from '../../../../config/url.config'
import {MovieService} from '../../../../services/movie.service'
import {getKeys} from '../../../../utils/object/getKeys'
import {toastError} from '../../../../utils/toast-error'

import {IMovieEditInput} from './movie-edit.interface'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
    const {push, query} = useRouter()

    const movieId = String(query.id)

    const {isLoading} = useQuery(
        ['movie', movieId],
        () => MovieService.getById(movieId),
        {
            onSuccess: ({data}) => {
                getKeys(data).forEach((key) => {
                    setValue(key, data[key])
                })
            },
            onError: (e) => {
                toastError(e, 'get movie')
            },
            enabled: !!query.id,
        }
    )

    const {mutateAsync} = useMutation(
        'update movie',
        (data: IMovieEditInput) => MovieService.update(movieId, data),
        {
            onError: (e) => {
                toastError(e, 'get movie')
            },
            onSuccess() {
                toastr.success('Редактирование фильма', 'Редактирование прошло успешно')
                push(getAdminUrl('movies'))
            },
        }
    )

    const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
        await mutateAsync(data)
    }

    return {isLoading, onSubmit, mutateAsync}
}
