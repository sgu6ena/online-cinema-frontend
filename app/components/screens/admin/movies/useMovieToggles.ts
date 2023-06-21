
import { AdminService } from '../../../../api/admin/admin.service'
import { toastError } from '@/utils/toast-error'
import { useMutation, useQuery } from 'react-query'

export const useMovieToggles = ({ id }: { id: string }) => {
  const { mutateAsync:setIsPayedAsync,isLoading} = useMutation(
    ['setPayForFilm', id],
    (isPayed:boolean) => AdminService.setPayForFilm(id, isPayed),
    {
      onError(error) {
        toastError('Ошибка смены статуса платности фильма');
      },
    },
  );
  const { mutateAsync:setIsVisibleAsync,isLoading:isLoadingVisible} = useMutation(
    ['setVisibleForFilm', id],
    (isVisible:boolean) => AdminService.setVisibleForFilm(id, isVisible),
    {
      onError(error) {
        toastError('Ошибка смены статуса видимости фильма');
      },
    },
  );






  return { isLoading, setIsPayedAsync , setIsVisibleAsync, isLoadingVisible };
}

