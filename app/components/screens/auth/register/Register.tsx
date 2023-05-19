import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

import { LINKS } from '@/config/links'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import Meta from '../../../../utils/meta/Meta'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import Button from '../../../ui/form-elemets/Button'
import Heading from '../../../ui/heading/Heading'
import styles from '../Auth.module.scss'
import { IRegisterInputEmail, IRegisterInputMobile } from '../auth.interface'

import RegisterFieldsEmail from './RegisterFieldsEmail'
import RegisterFieldsMobile from './RegisterFieldsMobile'
import { registerByMail, registerByMobile } from '@/store/user/user.actions'


const Register = () => {
	const { isLoading, isRegistered } = useAuth()

	const {
		register: registerInput,
		handleSubmit:handleSubmitEmail,
		formState:formStateEmail,
	} = useForm<IRegisterInputEmail>({ mode: 'onChange' })
	const {
		register: registerInputMobile,
		handleSubmit:handleSubmitMobile,
		formState:formStateMobile,
	} = useForm<IRegisterInputMobile>({ mode: 'onChange' })

	const { registerByMail } = useActions()

	const [isByMobile, setIsByMobile] = useState(true)

	const onSubmitEmail: SubmitHandler<IRegisterInputEmail> = ({
																										 email,
																										 login,
																										 passwordRpt,
																										 password,
																									 }) => {
		if (password === passwordRpt) registerByMail({ login, email, password })
		else toast.error('пароли не совпадают')
	}

	const onSubmitMobile: SubmitHandler<IRegisterInputMobile> = ({
																															 login,
																															 passwordRpt,
																															 password,
																														 }) => {
		if (password === passwordRpt) registerByMobile({ login,  password })
		else toast.error('пароли не совпадают')
	}

	useEffect(() => {
	}, [formStateEmail.isSubmitted, isRegistered])

	const changeRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, state:boolean) => {
		e.preventDefault()
		setIsByMobile(state)
	}

	return (
		<>
			<Meta title='Регистрация' />
			<section className={styles.wrapper}>
				<form onSubmit={isByMobile ? handleSubmitMobile(onSubmitMobile):handleSubmitEmail(onSubmitEmail)}>
					{isLoading && <SkeletonLoader className='h-96' />}
					{formStateEmail.isSubmitted && isRegistered && !isLoading && (
						<Heading
							title='Проверьте вашу электронную почту для завершения регистрации'
							className='text-gray-500 text-xl mb-8'
						/>
					)}


					{!formStateEmail.isSubmitted && !isLoading && (
						<>
							<Heading title={'Регистрация'} className='mb-3' />
							<Heading
								title='Зарегистрируйтесь для просмотра фильмов и сериалов'
								className='text-gray-500 text-sm mb-8'
							/>
							<button
								className={isByMobile ? styles.active : styles.change}
								onClick={(e) => changeRegister(e, true)}>
								по телефону
							</button>
							<button
								className={!isByMobile ? styles.active : styles.change}
								onClick={(e) => changeRegister(e, false)}>
								по почте
							</button>
							{isByMobile ? <RegisterFieldsMobile  register={registerInputMobile} formState={formStateMobile} /> :
								<RegisterFieldsEmail register={registerInput} formState={formStateEmail} />}

							<div className={styles.buttons}>
								<Button type='submit' disabled={!formStateEmail.isValid}>
									Зарегистрироваться
								</Button>
							</div>
							<p>
								Уже зарегистрированы?{' '}
								<Link href={LINKS.LOGIN}>
									<a className='link text-primary'>Войдите в аккаунт.</a>
								</Link>
							</p>
						</>
					)}
				</form>
			</section>
		</>
	)
}

export default Register
