import dynamic from 'next/dynamic'
import Link from 'next/link'
import {FC} from 'react'

import MaterialIcon from '../../ui/MaterialIcon'
import styles from '../Layout.module.scss'
import Logo from '../Navigation/Logo'
import Menu from '../Navigation/MenuContainer/Menu'
import Search from '../Sidebar/Search/Search'

import Burger from './Burger'
import {headerMenu} from './menu.data'

const Avatar = dynamic(() => import('./Avatar'), {
    ssr: false,
})

const Header: FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.start}>

                <Logo/>
            </div>

            <div className={styles.end}>
                <Search/>
                <Avatar/>

            </div>
            <Burger/>
        </div>
    )
}

export default Header
