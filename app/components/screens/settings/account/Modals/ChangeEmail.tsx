import { FC, useEffect } from 'react'
import styles from './modal.module.scss'
import Heading from '../../../../ui/heading/Heading'
import Field from '../../../../ui/form-elemets/Field'
import Button from '../../../../ui/form-elemets/Button'
import { useActions } from '@/hooks/useActions'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IChangeConf, IChangeEmail, IChangePassword, IChangePhone } from '@/store/settings/settings.interface'
import { useSettings } from '@/hooks/useSettings'
import { changeEmail } from '@/store/settings/settings.actions'
import { validEmail } from '@/shared/regex'

interface ChangeEmail {
	setIsShow: (isShow: boolean) => void
}

const ChangeEmail: FC<ChangeEmail> = ({ setIsShow }) => {
	const { changeEmail, resetIsCodeChangeEmailSend, changeEmailConf } = useActions()
	const { isLoading, isCodeChangeEmailSend, isError } = useSettings()
	const { register, handleSubmit, formState } = useForm<IChangeEmail>({
		mode: 'onSubmit',
	})

	const { register: registerCode, handleSubmit: handleSubmitCode, formState: formStateCode } = useForm<IChangeConf>({
		mode: 'onSubmit',
	})
	const onSubmitEmail: SubmitHandler<IChangeEmail> = (data) => {
		changeEmail(data)
	}

	const onSubmitCode: SubmitHandler<IChangeConf> = (data) => {
		changeEmailConf(data)
		setIsShow(false)
		resetIsCodeChangeEmailSend()
	}
	const onCancel = () => {
		setIsShow(false)
		resetIsCodeChangeEmailSend()
	}

	return (
		<div>
			<form onSubmit={isCodeChangeEmailSend ? handleSubmitCode(onSubmitCode) : handleSubmit(onSubmitEmail)}>
				<div className={styles.head}>
					<Heading title='Изменить e-mail' />
				</div>
				{isLoading ?
					<div>загрузка...</div>
					: isCodeChangeEmailSend ?
						<Field type='text'
									 {...registerCode('code', {
										 required: 'Обязательное поле',
									 })}
									 placeholder='Код из письма'
									 error={formStateCode.errors && formStateCode.errors.code}
									 autoComplete={'off'}
						/> :
						<Field type='text'
									 {...register('email', {
										 required: 'Обязательное поле',
										 pattern: {
											 value: validEmail,
											 message: 'введите верный e-mail',
										 },
									 })}
									 placeholder='E-mail'
									 error={formState.errors && formState.errors.email}
									 autoComplete={'off'}
						/>
				}
				<div className={styles.footer}>

					<Button type='submit'>
						Сменить e-mail
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