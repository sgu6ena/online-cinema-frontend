import Link from 'next/link'
import React, { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { LINKS } from '@/config/links'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import Meta from '../../../../utils/meta/Meta'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import Button from '../../../ui/form-elemets/Button'
import Heading from '../../../ui/heading/Heading'
import styles from '../Auth.module.scss'
import { IAuthInput } from '../auth.interface'
import { useAuthRedirect } from './useAuthRedirect'
import AuthFieldsMobile from '@/screens/auth/login/AuthFieldsMobile'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const {
		register: registerInput,
		handleSubmit,
		formState,
	} = useForm<IAuthInput>({ defaultValues: {  login: "", password: "" }})

	const { login } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		login(data)
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
		if (event.key === 'Enter') {
			event.preventDefault(); // Предотвращаем стандартное действие отправки формы
			handleSubmit(onSubmit)(); // Вызываем handleSubmit при нажатии Enter
		}
	};


	return (
		<>
			<Meta title='Авторизация' />
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}> {/* Добавляем обработчик события onKeyDown */}
					{isLoading && <><SkeletonLoader />ВХОД<SkeletonLoader /></>}
					{!isLoading && (
						<>
							<Heading title={'Вход в аккаунт'} className='mb-3' />
							<Heading
								title='Введите e-mail / номер телефона / логин'
								className='text-gray-500 text-sm mb-8'
							/>
							<AuthFieldsMobile
								// control={control}
								register={registerInput}
								formState={formState}
							/>

							<div className={styles.buttons} >
								<p >
									<Link href={LINKS.FORGOT}>
										<a className='font-bold text-md '>Забыли пароль?</a>
									</Link>
								</p>
								<Button type='submit' >
									Войти
								</Button>
							</div>
							<p>
								Еще нет аккаунта?{' '}
								<Link href={LINKS.REGISTER}>
									<a className='link text-primary'> Зарегистрируйтесь</a>
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
