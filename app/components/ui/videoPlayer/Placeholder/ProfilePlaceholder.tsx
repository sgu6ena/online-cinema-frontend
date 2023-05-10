import Link from 'next/link'
import { FC } from 'react'

import styles from './AuthPlaсeholder.module.scss'
import { LINKS } from '@/config/links'

const ProfilePlaceholder: FC = () => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>Для просмотра фильма вы должны приобрести подписку</div>
				<Link href={LINKS.SUBSCRIPTIONS}>
					<a className={styles.btn}>Личный кабинет</a>
				</Link>
			</div>
		</div>
	)
}

export default ProfilePlaceholder
