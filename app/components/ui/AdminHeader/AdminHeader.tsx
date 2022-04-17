import {ChangeEvent, FC} from 'react'

import SearchField from '../../ui/searchField/Search Field'

import AdminCreateButton from './AdminCreateButton'
import styles from './AdminHeader.module.scss'
import AdminActions from "../../ui/AdminTable/AdminActions/AdminActions";

interface IAdminHeader {
    onClick?: () => void
    searchTerm: string
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<IAdminHeader> = ({
                                           onClick,
                                           handleSearch,
                                           searchTerm,
                                       }) => {
    return (
        <div className={styles.header}>
            <SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
            {onClick && <AdminCreateButton onClick={onClick}/>}
            <AdminActions editUrl={'editUrl'} removeHandler={() => {
            }}/>
        </div>

    )
}

export default AdminHeader
