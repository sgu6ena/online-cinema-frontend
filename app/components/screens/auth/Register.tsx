import React, { useState } from 'react'
import Meta from '../../../utils/meta/Meta'
import styles from './Auth.module.scss'
import Heading from '../../ui/heading/Heading'
import Button from '../../ui/form-elemets/Button'
import { useAuthRedirect } from './useAuthRedirect'
import { useAuth } from '../../../hooks/useAuth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IRegisterInput } from './auth.interface'
import { useActions } from '../../../hooks/useActions'
import RegisterFields from './RegisterFields'

const Register = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IRegisterInput>({ mode: 'onSubmit' })

	const { register } = useActions()

	const onSubmit: SubmitHandler<IRegisterInput> = (data) => {
		register(data)
	}

	return (
		<>
			<Meta title="Регистрация" />
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title={'Авторизация'} className="mb-6" />

					<RegisterFields
						register={registerInput}
						formState={formState}
						isPasswordRequired
					/>

					<div className={styles.buttons}>

						<Button
							type="submit"
							disabled={isLoading}
						>
							Регистрация
						</Button>
					</div>
				</form>
			</section>
		</>
	)
}

export default Register