import { useQuery } from 'react-query'
import { PortalService } from '../../../api/portal.service'

export const GetShooting = (fileId: string, percent: number) => {
	const {
		data,
		isLoading,
		error,
		status,
	} = useQuery('send percent viewed', () => PortalService.sendShootingPercent(fileId, percent), {})
	return { data, isLoading, error, status }
}