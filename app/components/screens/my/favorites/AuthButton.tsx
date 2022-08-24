import { FC } from 'react'

import Link from 'next/link'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=${slug}`}>
			<a className='btn-primary px-10 py-4'>Войти</a>
		</Link>
	)
}

export default AuthButton