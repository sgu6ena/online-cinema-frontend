import { ChangeEvent, FC } from 'react'
import AdminCreateButton from './AdminCreateButton'
import styles from './AdminHeader.module.scss'
import SearchFieldAlt from '../searchField/sarchFieldAlt'


interface IAdminHeader {
	onClick?: () => void
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<IAdminHeader> = ({
	onClick,
	handleSearch,
	searchTerm,
	children
}) => {
	return (
		<div className={styles.header}>
			<SearchFieldAlt searchTerm={searchTerm} handleSearch={handleSearch} />
			{children}
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

export default AdminHeader
