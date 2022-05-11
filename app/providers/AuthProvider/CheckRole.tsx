import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAuth } from '../../hooks/useAuth'
import { TypeComponentAuthFields } from '../../shared/types/auth.types'

const CheckRole: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyUser, isOnlyAdmin },
}) => {
	const { user } = useAuth()
	const router = useRouter()
	const Children = () => <>{children}</>

	if (user) return <Children />
	else {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}
}

export default CheckRole
