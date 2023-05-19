import { FC, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const AuthProvider: FC = ({ children }) => {
	const { user } = useAuth()
	const { logout } = useActions()

	const { pathname } = useRouter()
	useEffect(() => {
		const token = Cookies.get('atp')
		if (!token && user) logout()
	}, [pathname])
	return (
		<>
			{ children }
		</>
	)
}

export default AuthProvider