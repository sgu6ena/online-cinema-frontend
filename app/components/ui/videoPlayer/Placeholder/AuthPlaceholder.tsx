import { FC } from 'react'

import AuthButton from './AuthButton'
import styles from './AuthPlaсeholder.module.scss'

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>Первые 14 дней за 1 рубль</div>
				<AuthButton slug={slug} />
			</div>
		</div>
	)
}

export default AuthPlaceholder
