import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { LINKS } from '../../../config/links'
import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import Meta from '../../../utils/meta/Meta'
import Button from '../../ui/form-elemets/Button'
import Heading from '../../ui/heading/Heading'

import styles from './Auth.module.scss'
import RegisterFields from './RegisterFields'
import { IRegisterInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'

const Register = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const {
		register: registerInput,
		handleSubmit,
		formState,
		watch,
		reset,
	} = useForm<IRegisterInput>({ mode: 'onChange' })

	const { register } = useActions()

	const onSubmit: SubmitHandler<IRegisterInput> = ({
																										 email,
																										 login,
																										 passwordRpt,
																										 password,
																									 }) => {
		if (password === passwordRpt) register({ login, email, password })
		else toast.error('пароли не совпадают')
	}

	return (
		<>
			<Meta title='Регистрация' />
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title={'Регистрация'} className='mb-3' />
					<Heading
						title='Зарегистрируйтесь для просмотра  фильмов и сериалов'
						className='text-gray-600 text-xl mb-3'
					/>
					<RegisterFields register={registerInput} formState={formState} />

					<div className={styles.buttons}>
						<Button type='submit' disabled={!formState.isValid}>
							Зарегистрироваться
						</Button>
					</div>
					<p>
						Уже зарегистрированы?{' '}
						<Link href={LINKS.LOGIN}>
							<a className='link text-primary'>Войдите в аккаунт.</a>
						</Link>
					</p>
				</form>
			</section>
		</>
	)
}

export default Register
