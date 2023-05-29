import React, { FC, useEffect } from 'react'
import styles from './modal.module.scss'
import Heading from '../../../../ui/heading/Heading'
import Field from '../../../../ui/form-elemets/Field'
import Button from '../../../../ui/form-elemets/Button'
import { useActions } from '@/hooks/useActions'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IChangeConf, IChangePhone } from '@/store/settings/settings.interface'
import { useSettings } from '@/hooks/useSettings'

import { validMobile } from '@/shared/regex'

interface ChangePhone {
	setIsShow: (isShow: boolean) => void
}

const ChangePhone: FC<ChangePhone> = ({ setIsShow }) => {
	const { changePhone, resetIsCodeChangePhoneSend, changePhoneConf } = useActions()
	const { isLoading, isCodeChangePhoneSend, isError } = useSettings()
	const { register, handleSubmit, formState } = useForm<IChangePhone>({
		mode: 'onSubmit',
	})

	const { register: registerCode, handleSubmit: handleSubmitCode, formState: formStateCode } = useForm<IChangeConf>({
		mode: 'onSubmit',
	})
	const onSubmitPhone: SubmitHandler<IChangePhone> = (data) => {
		changePhone(data)
	}

	const onSubmitCode: SubmitHandler<IChangeConf> = (data) => {
		changePhoneConf(data)
		setIsShow(false)
		resetIsCodeChangePhoneSend()
	}
	const onCancel = () => {
		setIsShow(false)
		resetIsCodeChangePhoneSend()
	}


	return (
		<div>
			<form onSubmit={isCodeChangePhoneSend ? handleSubmitCode(onSubmitCode) : handleSubmit(onSubmitPhone)}>
				<div className={styles.head}>
					<Heading title='Изменить телефон' />
					<Heading title={isCodeChangePhoneSend?'Введите код из смс':'Введите новый номер телефона'} className={'text-sm  mt-3'} />
				</div>
				{isLoading ?
					<div>загрузка...</div>
					: isCodeChangePhoneSend ?
						<Field type='text'
									 {...registerCode('code', {
										 required: 'Обязательное поле',
									 })}
									 placeholder='Код из смс'
									 error={formStateCode.errors && formStateCode.errors.code}
									 autoComplete={'off'}
						/> :
						<Field type='text'
									 {...register('phone', {
										 required: 'Обязательное поле',
										 pattern: {
											 value: validMobile,
											 message: 'введите телефон в формате 77ХХХХХХ',
										 },
									 })}
									 placeholder='Номер телефона в формате 77ХХХХХХ'
									 error={formState.errors && formState.errors.phone}
									 autoComplete={'off'}
						/>
				}
				<div className={styles.footer}>

					<Button type='submit'>
						Сменить номер телефона
					</Button>

					<Button type={'reset'} className={styles.cancel} onClick={onCancel}>
						Отмена
					</Button>

				</div>
			</form>
		</div>
	)
}


export default ChangePhone