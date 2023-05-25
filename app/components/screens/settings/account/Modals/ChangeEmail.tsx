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
import { validEmail } from '@/shared/regex'

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
						<Field type='text'
									 {...register('email', {
										 required: 'Обязательное поле',
										 pattern:{
											 value:validEmail,
											 message:'введите корректный e-mail'
										 },
									 })}
									 placeholder='Новый E-mail'
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