import {FC} from 'react'

import Meta from '../../../../utils/meta/Meta'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import Heading from '../../../ui/heading/Heading'

import Statistic from './Statistics/Statistic'

import styles from './Admin.module.scss'

const Admin: FC = () => {
    return (
        <Meta title="Админка">
            <AdminNavigation/>
            <Heading title="Статистика"/>
            <Statistic/>
        </Meta>
    )
}

export default Admin
