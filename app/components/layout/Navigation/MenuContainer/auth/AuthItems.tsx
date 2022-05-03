import {FC, useEffect, useState} from 'react'

import {getAdminHomeUrl} from '../../../../../config/url.config'
import {useAuth} from '../../../../../hooks/useAuth'
import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
    const {user} = useAuth()
    const [admin, setAdmin] = useState(false)
    const [login, setLogin] = useState(false)

    useEffect(() => {
        login && user?.isAdmin && setAdmin(true)

        user ? setLogin(true) : setLogin(false)
    }, [user, login, admin])

    return (
        <>
            {admin && login && (
                <MenuItem
                    item={{
                        icon: 'MdOutlineLock',
                        link: getAdminHomeUrl(),
                        title: 'Админка',
                    }}
                />
            )}
            {login ? (
                <>
                    <MenuItem
                        item={{
                            icon: 'MdSettings',
                            link: '/profile',
                            title: 'Профиль',
                        }}
                    />

                    <LogoutButton/>
                </>
            ) : (
                <>
                    <MenuItem
                        item={{
                            icon: 'MdLogin',
                            link: '/auth',
                            title: 'Войти',
                        }}
                    />
                </>
            )}

        </>
    )
}

export default AuthItems
