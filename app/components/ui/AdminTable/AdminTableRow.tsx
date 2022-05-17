import {FC} from 'react'

import AdminActions from './AdminActions/AdminActions'
import styles from './AdminTable.module.scss'
import {IAdminTable, ITableItem} from './admin-table.interface'

const AdminTableRow: FC<IAdminTable> = ({tableItem, removeHandler}) => {
    return (
        <tr>
            {tableItem.items.map((value: string, idx: number) => (
                <td key={idx}>{value}</td>
            ))}
            <td>
                <AdminActions editUrl={tableItem.editUrl} removeHandler={()=>removeHandler(tableItem._id)}/>
            </td>
        </tr>
    )
}

export default AdminTableRow
