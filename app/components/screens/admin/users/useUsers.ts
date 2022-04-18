import {ChangeEvent, useMemo, useState} from 'react'
import {useMutation, useQuery} from 'react-query'
import {toastr} from 'react-redux-toastr'

import {ITableItem} from '../../../ui/AdminTable/admin-table.interface'
import {getAdminUrl} from '../../../../config/url.config'
import {useDebounce} from '../../../../hooks/useDubounce'
import {userService} from '../../../../services/user.service'
import {convertMongoDbDate} from '../../../../utils/date/convertMongoDbDate'
import {toastError} from '../../../../utils/toast-error'

export const useUsers = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  const queryData = useQuery(
      ['user list', debouncedSearch],
      () => userService.getAll(debouncedSearch),
      {
        select: ({data}) =>
            data.map(
                (user): ITableItem => ({
                  _id: user._id,
                  editUrl: getAdminUrl(`user/edit/${user._id}`),
                  items: [
                    user.email,
                    convertMongoDbDate(user.createdAt),
                    user.isAdmin ? 'админ' : 'пользователь',
                  ],
                })
            ),

        onError: (error) => {
          toastError(error, 'Список пользователей')
        },
      }
  )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const {mutateAsync: deleteAsync} = useMutation(
      ['delete user', debouncedSearch],
      (userId: string) => userService.deleteUser(userId),
      {
        onError: (error) => {
          toastError(error, 'Удаление пользователя')
        },
        onSuccess: () => {
          toastr.success('Удаление пользователя', 'удаление прошло успешно')
          queryData.refetch()
        },
      }
  )

  return useMemo(
      () => ({handleSearch, ...queryData, searchTerm, deleteAsync}),
      [queryData, searchTerm, deleteAsync]
  )
}
