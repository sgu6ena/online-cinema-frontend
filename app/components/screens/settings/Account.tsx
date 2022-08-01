import SkeletonLoader from '../../ui/SkeletonLoader'
import { useProfile } from './useProfile'
import { FC } from 'react'
import Heading from '../../ui/heading/Heading'
import styles from "./settings.module.scss"

const Account:FC = () => {
	const { user, isLoading } = useProfile()
	return (
		<div>
			<Heading title={'АККАУНТ'} className='mb-5' />
			{isLoading && <SkeletonLoader />}
			{user && (
				<div className={styles.card}>
					<img
						src={user.avatar}
						alt={user.login}
						className='rounded rounded-full'
					/>
					<p>Логин: {user.login}</p>
					<p>E-mail: {user.email}</p>
					<p>Подписка: {user.paid ? 'оплачена' : 'не оплачена'}</p>
					{user.promo && <p>Портал за рубль: можно купить</p>}
					{user.name && <p>Имя: {user.name}</p>}
				</div>
			)}
		</div>
	)
}

export default Account