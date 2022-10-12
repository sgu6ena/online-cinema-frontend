import { FC } from 'react'

import { useRecovery } from './useRecovery'
import Heading from '../../../ui/heading/Heading'
import SkeletonLoader from '../../../ui/SkeletonLoader'

const RecoveryKey: FC = () => {
	const { isLoading,  isSuccess, isError } = useRecovery()

	return (
		<div className={'p-layout'}>
			<Heading title={"Восстановление пароля"}/>
			<div className={'py-layout'}>
				{isLoading && <SkeletonLoader/>}
				{isSuccess && 'Восстановление пароля прошло успешно - проверьте Вашу электронную почту '}
				{isError && 'Ошибка при восстановлении пароля'}
			</div>
		</div>
	)
}

export default RecoveryKey