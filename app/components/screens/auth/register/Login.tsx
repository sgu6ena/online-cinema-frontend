import React from 'react'
import Meta from '@/utils/meta/Meta'
import styles from '@/screens/auth/Auth.module.scss'
import Heading from '@/ui/heading/Heading'

const Login = () => {
	return (
		<Meta title='Вход'>
			<section className={styles.wrapper}>
				<form>
					<Heading title={'Вход'} className='mb-3' />
					<Heading
						title='Проверьте ваш телефон'
						className='text-gray-500 text-sm mb-8'
					/>
				</form>
			</section>
		</Meta>
	)
}

export default Login