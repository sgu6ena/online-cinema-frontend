import Image from 'next/image'
import Link from 'next/link'
import {FC, useEffect, useState} from 'react'

import {useAuth} from '../../../../hooks/useAuth'
import {BsPersonSquare} from 'react-icons/bs'
import {useRouter} from 'next/router'
import styles from '../header.module.scss'
import cn from 'classnames'

import {notUserMenu, userMenu} from './menu.data'
import LogoutButton from "../../Navigation/MenuContainer/auth/LogoutButton";
import MaterialIcon from "../../../ui/MaterialIcon";


const Avatar: FC = () => {
    const {user} = useAuth()
    const {asPath} = useRouter()
    const [isShow, setIsShow] = useState(false)
    const toggleMenu = () => {
        setIsShow(!isShow)
    }
    useEffect(() => {
        setIsShow(false)
    }, [asPath])


    return (
        <>
            <div className={styles.menu}>
                <div className={cn(styles.avatar, isShow ? styles.change : '')} onClick={toggleMenu}>

                    {user?.avatar ? (<Image
                        src={user.avatar}
                        width={40}
                        height={40}
                        className='rounded-full'
                        unoptimized
                    />) : (
                        <BsPersonSquare className='h-10 w-10 text-white'/>
                    )}
                </div>

                {
                    user ? <ul className={isShow ? 'active' : 'hidden'}>
                            {userMenu.map((i) => (
                                <li key={i.link}>

                                    <Link href={i.link}>
                                        <a><MaterialIcon name={i.icon}/>{i.title}</a>
                                    </Link>
                                </li>
                            ))}
                            <LogoutButton/>
                        </ul> :
                        <ul className={isShow ? 'active' : 'hidden'}>
                            {notUserMenu.map((i) => (
                                <li key={i.link}>

                                    <Link href={i.link}>
                                        <a><MaterialIcon name={i.icon}/>{i.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                }
            </div>
        </>
    )
}

export default Avatar
