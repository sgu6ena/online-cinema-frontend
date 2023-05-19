import React, { FC, useEffect } from 'react'
import styles from './modal.module.scss'
import Heading from '../../../../ui/heading/Heading'
import Field from '../../../../ui/form-elemets/Field'
import Button from '../../../../ui/form-elemets/Button'
import { useActions } from '@/hooks/useActions'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IChangePassword } from '@/store/settings/settings.interface'
import { useSettings } from '@/hooks/useSettings'

interface IChangePass {
	setIsShow: (isShow: boolean) => void
}

const ChangePass: FC<IChangePass> = ({ setIsShow }) => {
	const { changePassword } = useActions()
	const { isLoading, isError } = useSettings()
	const { register, handleSubmit, formState } = useForm<IChangePassword>({
		mode: 'onChange',
	})


	const onSubmit: SubmitHandler<IChangePassword> = (data) => {
		changePassword(data)
	}

	useEffect(() => {
		isError ? setIsShow(true) : setIsShow(false)
	}, [isLoading])

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.head}>
					<Heading title='Изменить пароль' />
				</div>
				{isLoading ?
					<div>меняю пароль</div>
					: <><Field type='password'
										 {...register('passwordOld', {
											 required: 'Обязательное поле',
											 minLength: {
												 value: 6,
												 message: 'Минимум 6 символов',
											 },
										 })}
										 placeholder='Старый пароль '
										 error={formState.errors && formState.errors.passwordOld}
										 autoComplete={'off'}
					/>
						<Field type='password'
									 {...register('password', {
										 required: 'Обязательное поле',
										 minLength: {
											 value: 6,
											 message: 'Минимум 6 символов',
										 },
									 })}
									 placeholder='Новый пароль '
									 error={formState.errors && formState.errors.password}
									 autoComplete={'off'}
						/></>}
				<div className={styles.footer}>

					<Button type='submit' disabled={!formState.isValid}>
						Сменить пароль
					</Button>

					<Button type={'reset'} className={styles.cancel} onClick={() => setIsShow(false)}>
						Отмена
					</Button>

				</div>
			</form>
		</div>
	)
}


export default ChangePass