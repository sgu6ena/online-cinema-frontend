import Link from 'next/link'
import React, {useState} from 'react'

import MaterialIcon from '../../ui/MaterialIcon'
import styles from '../Layout.module.scss'

import {headerMenu} from './menu.data'

const Burger = () => {
    const [isShow, setIsShow] = useState(false)

    const toggleMenu = () => {
        setIsShow(!isShow)
    }

    return (
        <div className={styles.menu}>
            <button onClick={toggleMenu}>
                <MaterialIcon name={isShow ? 'MdClose' : 'MdMenu'}/>
            </button>
            <ul className={isShow ? 'active' : 'hidden'}>
                {headerMenu.map((i) => (
                    <li key={i.link}>
                        <Link href={i.link}>
                            <a>{i.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Burger
