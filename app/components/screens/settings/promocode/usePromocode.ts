import { useState } from 'react';
import { useMutation } from 'react-query';
import { PortalService } from '../../../../api/portal.service';
import { toastError } from '@/utils/toast-error';

export const usePromocode = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { mutateAsync: updateAsync, data, isError } = useMutation(
		'get info about promocodes',
		async ({ code }: { code: string }) => {
			try {
				setIsLoading(true);
				const result = await PortalService.infoPromocode(code);
				setIsLoading(false);
				return result;
			} catch (error) {
				setIsLoading(false);
				throw error;
			}
		},
		{
			onError(error) {
				toastError(error);
			},
		},
	);

	return { updateAsync, data, isLoading, isError };
};
