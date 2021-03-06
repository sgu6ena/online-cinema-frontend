import Link from 'next/link'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { LINKS } from '../../../../config/links'
import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'
import Meta from '../../../../utils/meta/Meta'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import Button from '../../../ui/form-elemets/Button'
import Heading from '../../../ui/heading/Heading'
import styles from '../Auth.module.scss'
import { IAuthInput } from '../auth.interface'

import AuthFields from './AuthFields'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const {
		register: registerInput,
		handleSubmit,
		formState,
	} = useForm<IAuthInput>({ mode: 'onChange' })

	const { login } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		login(data)
	}

	return (
		<>
			<Meta title="Авторизация" />
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					{' '}
					{isLoading && <SkeletonLoader className="h-60" />}{' '}
					{!isLoading && (
						<>
							<Heading title={'Вход в аккаунт'} className="mb-3" />
							<Heading
								title="Войдите для доступа к подписке и списку избранного"
								className="text-gray-600 text-xl mb-3"
							/>
							<AuthFields
								register={registerInput}
								formState={formState}
								isPasswordRequired
							/>

							<div className={styles.buttons}>
								<p>
									<Link href="app/components/screens/auth/login/Auth">
										<a>Забыли пароль?</a>
									</Link>
								</p>
								<Button type="submit" disabled={!formState.isValid}>
									Войти
								</Button>
							</div>
							<p>
								Еще нет аккаунта?{' '}
								<Link href={LINKS.REGISTER}>
									<a className="link text-primary"> Зарегистрируйтесь</a>
								</Link>
							</p>
						</>
					)}
				</form>
			</section>
		</>
	)
}

export default Auth
