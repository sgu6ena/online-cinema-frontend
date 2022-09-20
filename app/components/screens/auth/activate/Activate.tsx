import { FC } from 'react'

import { useActivate } from './useActivate'
import Heading from '../../../ui/heading/Heading'
import SkeletonLoader from '../../../ui/SkeletonLoader'

const Activate: FC = () => {
	const { isLoading,  isSuccess, isError } = useActivate()

	return (
		<div className={'p-layout'}>
			<Heading title={"Активация регистрации"}/>
			<div className={'py-layout'}>
			{isLoading && <SkeletonLoader/>}
			{isSuccess && 'Активация прошла успешно'}
			{isError && 'Ошибка активации'}
			</div>
		</div>
	)
}

export default Activate