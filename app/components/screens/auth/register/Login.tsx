import React from 'react'
import Meta from '@/utils/meta/Meta'
import styles from '@/screens/auth/Auth.module.scss'
import Heading from '@/ui/heading/Heading'

const Login = () => {
	return (
		<Meta title='Регистрация'>
			<section className={styles.wrapper}>
				<form>
					<Heading title={'Регистрация'} className='mb-3' />
					<Heading
						title='Введите пароль, который мы отправили на 777123456'
						className='text-gray-500 text-sm mb-8'
					/>
				</form>
			</section>
		</Meta>
	)
}

export default Login