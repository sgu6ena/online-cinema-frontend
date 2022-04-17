import cn from 'classnames'
import {FC} from 'react'

import styles from './AdminTable.module.scss'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({headerItems}) => {
    return (
        <thead className={cn(styles.item, styles.itemHeader)}>
        <tr>
            {headerItems.map((value) => (
                <th>{value}</th>
            ))}
            <th>Действия</th>
        </tr>
        </thead>
    )
}

export default AdminTableHeader
