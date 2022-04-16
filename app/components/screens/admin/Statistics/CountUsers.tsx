import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import { AdminService } from '../../../../services/admin.service'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import styles from '../Admin.module.scss'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	)
	return (
		<div className={cn(styles.block, styles.countUsers)}>
			{isLoading ? (
				<SkeletonLoader count={1} />
			) : (
				<div className={styles.number}>{response?.data}</div>
			)}
			<div className={styles.description}>Количество пользователей</div>
		</div>
	)
}

export default CountUsers
