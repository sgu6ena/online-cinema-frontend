import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { useActions } from '../../hooks/useActions'
import { useAuth } from '../../hooks/useAuth'
import { TypeComponentAuthFields } from '../../shared/types/auth.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'))

const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyUser, isOnlyAdmin },
}) => {
	const { user } = useAuth()
	const { logout } = useActions()

	const { pathname } = useRouter()
	//
	// useEffect(() => {
	//     const token = Cookies.get('token')
	//     if (accessToken) checkAuth()
	// }, [])

	useEffect(() => {
		const token = Cookies.get('token')
		if (!token && user) logout()
	}, [pathname])

	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser, isOnlyAdmin }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
