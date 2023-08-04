import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
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
import { useRouter } from 'next/router'
import Field from '@/ui/form-elemets/Field'



const Register = () => {
	const { isLoading, isRegistered } = useAuth()
	const { push } = useRouter()
	const [isByMobile, setIsByMobile] = useState(true)

	const {
		register,
		formState,
		handleSubmit
	} = useForm({ mode: 'onBlur' })

	const {
		register: registerInput,
		handleSubmit: handleSubmitEmail,
		formState: formStateEmail,
	} = useForm<IRegisterInputEmail>({ mode: 'onBlur' })

	const {
		register: registerInputMobile,
		handleSubmit: handleSubmitMobile,
		formState: formStateMobile,
	} = useForm<IRegisterInputMobile>({ mode: 'onBlur' })

	const { registerByMail, registerByMobile } = useActions()
	const [username, setUsername] = useState<string>('')
	const { login } = useActions()
	const {user} = useAuth()
	const onSubmitEmail: SubmitHandler<IRegisterInputEmail> = ({ email }) => {
		registerByMail({ email })
		setUsername(email)
	}

	const onSubmitMobile: SubmitHandler<IRegisterInputMobile> = ({ phone }) => {
		registerByMobile({ phone })
		setUsername(phone)
	}
	//
	useEffect(() => {
		if (user?.avatar)
			push(LINKS.MAIN)
	}, [user])

	const changeRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, state: boolean) => {
		e.preventDefault()
		setIsByMobile(state)
	}

	const getLogin: SubmitHandler<FieldValues> = (data)=>{
		login({ login:username, password:data.password })
	}

	return (
		<>

			<Meta title='Регистрация' />
			<section className={styles.wrapper}>

				{ isRegistered  ?(
					<form onSubmit={handleSubmit(getLogin)}>
						<Heading
							title="Регистрация"
							className=' text-md mb-5'
						/>
					<Heading
						title={"Введите пароль, который мы отправили на  " + username}
						className='text-gray-500 text-sm mb-8'
					/>
						<Field type={'password'}
							{...register('password', {
								required: 'Пароль обязательное поле',
								minLength: {
									value: 6,
									message: 'Пароль должен содержать не менее 6-х символов ',
								},
								maxLength: {
									value: 6,
									message: 'Пароль должен содержать не более 6 символов ',
								},
							})}
							placeholder={isByMobile?'Пароль из смс':"Пароль из письма"}
							//error={errors?.login}
						/>
						<div className={styles.buttons}>
							<Button type='submit'>
								Войти
							</Button>
						</div>
					</form>
				):(
				<form onSubmit={isByMobile ? handleSubmitMobile(onSubmitMobile):handleSubmitEmail(onSubmitEmail)}>
					{isLoading && <SkeletonLoader className='h-96' />}
					{(!formStateEmail.isSubmitted || !formStateMobile.isSubmitted) && !isLoading && (
						<>
							<Heading title={'Регистрация'} className='mb-3' />
							<Heading
								title='Введите e-mail или номер телефона '
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
							{isByMobile ?
								<RegisterFieldsMobile register={registerInputMobile} formState={formStateMobile} /> :
								<RegisterFieldsEmail register={registerInput} formState={formStateEmail} />}

							<div className={styles.buttons}>
								<Button type='submit'
												// disabled={isByMobile ? !formStateMobile.isValid : !formStateEmail.isValid}
								>
									Получить код
								</Button>
							</div>
							<p>
								Уже зарегистрированы?{' '}
								<Link href={LINKS.LOGIN}>
									<a className='text-primary'>Войдите в аккаунт</a>
								</Link>
							</p>
						</>
					)}
				</form>
					)}
				</section>
		</>
	)
}

export default Register
