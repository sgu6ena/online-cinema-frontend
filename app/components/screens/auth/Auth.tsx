import Link from 'next/link'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { LINKS } from '../../../config/links'
import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import Meta from '../../../utils/meta/Meta'
import Button from '../../ui/form-elemets/Button'
import Heading from '../../ui/heading/Heading'

import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'
import cn from 'classnames'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({ mode: 'onChange' })

	const { login } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		login(data)
	}

	return (
		<>
			<Meta title='Авторизация' />
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title={'Вход в аккаунт'} className='mb-3' />
					<Heading
						title='Войдите для доступа к подписке и списку избранного'
						className='text-gray-600 text-xl mb-3'
					/>
					<AuthFields
						register={registerInput}
						formState={formState}
						isPasswordRequired
					/>

					<div className={styles.buttons}>
						<p >
							<Link href=''>
								<a>Забыли пароль?</a>
							</Link>
						</p>
						<Button type='submit' disabled={!formState.isValid}>
							Войти
						</Button>
					</div>
					<p >
						Еще нет аккаунта?{' '}
						<Link href={LINKS.REGISTER}>
							<a className='link text-primary'> Зарегистрируйтесь</a>
						</Link>
					</p>
				</form>
			</section>
		</>
	)
}

export default Auth
