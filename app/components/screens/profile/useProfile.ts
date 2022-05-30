import { useQuery } from 'react-query'

import { PortalService } from '../../../api/portal.service'
import { toastError } from '../../../utils/toast-error'

import { IUser, IUserData } from './user.interface'

export const useProfile = () => {
	const { isLoading, data } = useQuery(
		['profile portal'],
		() => PortalService.getProfile(),
		{
			onSuccess: (data) => {
				return data
			},
			onError: (e) => {
				toastError(e, 'get profile portal')
			},
		}
	)
	const user = data
	return { isLoading, user }
}
