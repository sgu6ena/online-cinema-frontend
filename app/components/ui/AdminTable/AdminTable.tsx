import {FC} from 'react'

import styles from './AdminTable.module.scss'
import AdminTableHeader from "./AdminTableHeader";

const AdminTable: FC = () => {
    return <table>
        <AdminTableHeader headerItems={['почта', 'дата создания', 'права']}/>
    </table>
}

export default AdminTable
