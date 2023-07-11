import { FC } from 'react'

import AuthButton from './AuthButton'
import styles from './AuthPlaсeholder.module.scss'

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>Для просмотра необходимо авторизироваться</div>
				<AuthButton slug={slug} />
			</div>
		</div>
	)
}

export default AuthPlaceholder
