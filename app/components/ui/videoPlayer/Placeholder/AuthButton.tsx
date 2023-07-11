import Link from 'next/link'
import { FC } from 'react'

import { getMoviesUrl } from '@/config/api.config'

import styles from './AuthPlaсeholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=${getMoviesUrl(slug)}`}>
			<a className={styles.btn}>Войти</a>
		</Link>
	)
}

export default AuthButton
