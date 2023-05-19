import React, { FC, useEffect } from 'react'
import styles from './modal.module.scss'
import Heading from '../../../../ui/heading/Heading'
import Field from '../../../../ui/form-elemets/Field'
import Button from '../../../../ui/form-elemets/Button'
import { useActions } from '@/hooks/useActions'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IChangeEmail, IChangePassword } from '@/store/settings/settings.interface'
import { useSettings } from '@/hooks/useSettings'
import { changeEmail } from '@/store/settings/settings.actions'

interface ChangeEmail {
	setIsShow: (isShow: boolean) => void
}

const ChangeEmail: FC<ChangeEmail> = ({ setIsShow }) => {
	const { changeEmail } = useActions()
	const { isLoading, isError } = useSettings()
	const { register, handleSubmit, formState } = useForm<IChangeEmail>({
		mode: 'onChange',
	})


	const onSubmit: SubmitHandler<IChangeEmail> = (data) => {
		changeEmail(data)
	}

	useEffect(() => {
		isError ? setIsShow(true) : setIsShow(false)
	}, [isLoading])

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.head}>
					<Heading title='Изменить e-mail' />
				</div>
				{isLoading ?
					<div>меняю пароль</div>
					: <>
						<Field type='password'
									 {...register('email', {
										 required: 'Обязательное поле',
										 minLength: {
											 value: 6,
											 message: 'Минимум 6 символов',
										 },
									 })}
									 placeholder='Email'
									 error={formState.errors && formState.errors.email}
									 autoComplete={'off'}
						/></>}
				<div className={styles.footer}>

					<Button type='submit' disabled={!formState.isValid}>
						Сменить email
					</Button>

					<Button type={'reset'} className={styles.cancel} onClick={() => setIsShow(false)}>
						Отмена
					</Button>

				</div>
			</form>
		</div>
	)
}


export default ChangeEmail