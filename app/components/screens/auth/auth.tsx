import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuth } from '../../../hooks/useAuth'
import Meta from '../../../utils/meta/Meta'
import Button from '../../ui/form-elemets/Button'
import Heading from '../../ui/heading/Heading'

import styles from './Auth.module.scss'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({ mode: 'onChange' })

	const login = (data: any) => {}
	const register = (data: any) => {}

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)
	}

	return (
		<>
			<Meta title="Авторизация" />
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title={'Авторизация'} className="mb-6" />

					{/*	fields*/}

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</>
	)
}

export default Auth
