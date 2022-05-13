import { FC } from 'react'

import SkeletonLoader from '../../ui/SkeletonLoader'
import Heading from '../../ui/heading/Heading'

import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { user, isLoading } = useProfile()

	return (
		<div className="p-layout">
			<Heading title={'Профиль'} className="mb-5" />{' '}
			{isLoading && <SkeletonLoader />}
			{user && (
				<div className="text-white text-lg  ">
					<p>Логин: {user.login}</p>
					<p>E-mail: {user.email}</p>
					<p>Статус подписки: {user.paid ? 'оплачена' : 'не оплачена'}</p>
					{user.promo && <p>Портал за рубль: можно купить</p>}
					{user.name && <p>Имя: {user.name}</p>}
				</div>
			)}
		</div>
	)
}

export default Profile
