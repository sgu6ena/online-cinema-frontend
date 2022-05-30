import {FC} from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import {IMenu} from './menu.interface'
import dynamic from "next/dynamic";

const DynamicAuthItems = dynamic(() => import('../../Header/burgers/AuthItems'), {
    ssr: false
})


const Menu: FC<{ menu: IMenu }> = ({menu: {items, title}}) => {
    return (
        <div className={styles.menu}>
            <div className={styles.heading}>{title}</div>
            <ul className={styles.ul}>

                {items.map((item) => (
                    <MenuItem item={item} key={item.link}/>
                ))}
                {title === 'Главное меню' ? <DynamicAuthItems/> : null}
            </ul>
        </div>
    )
}

export default Menu
