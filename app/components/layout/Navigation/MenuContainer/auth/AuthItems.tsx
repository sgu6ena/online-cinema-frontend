import { FC, useEffect, useState } from 'react'

import { getAdminHomeUrl } from '../../../../../config/url.config'
import { useAuth } from '../../../../../hooks/useAuth'
import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user, isLoading } = useAuth()
	const [login, setLogin] = useState(false)

	useEffect(() => {
		user ? setLogin(true) : setLogin(false)
	}, [user, login, isLoading])

	return (
		<>
			{login ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: `${user?.login}`,
						}}
					/>
					<MenuItem
						item={{
							icon: 'MdFavorite',
							link: '/favorites',
							title: `Избранное`,
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<>
					<MenuItem
						item={{
							icon: 'MdLogin',
							link: '/auth',
							title: 'Вход',
						}}
					/>
					<MenuItem
						item={{
							icon: 'MdAppRegistration',
							link: '/register',
							title: 'Регистрация',
						}}
					/>
				</>
			)}
		</>
	)
}

export default AuthItems
