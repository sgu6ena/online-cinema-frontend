import React, { FC } from 'react'
import { useActions } from '../../../../../hooks/useActions'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ICheckSms } from '../../../../../store/settings/settings.interface'
import Field from '../../../../ui/form-elemets/Field'
import styles from './modalPay.module.scss'
import Heading from '../../../../ui/heading/Heading'
import Button from '../../../../ui/form-elemets/Button'
import { useRuble } from '../../../../../hooks/useAuth'

interface ICodeFromSms {
	phone: string
	acceptTerms: boolean
}

const CodeFromSms:FC = () => {
	const { checkSMS } = useActions()
	const { register, handleSubmit, formState } = useForm<ICheckSms>({
		mode: 'onChange',
	})

	const promo = useRuble()
	console.log({ promo })
	const onSubmit: SubmitHandler<ICheckSms> = (data) => {
		console.log({sms:data.sms, promo:promo })
		//@ts-ignore
		checkSMS({sms:data.sms, promo:promo })
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.head}>
				<Heading title="Введите код из SMS" />
				<p>На указаный вами номер телефона выслан код подтверждения</p>
			</div>
			<Field
				{...register('sms', {
					required: 'Обязательное поле',
				})}
				placeholder="код из смс "
				error={formState.errors && formState.errors.sms}
			/>
			<div className={styles.footer}>
				<Button type="submit" disabled={!formState.isValid}>
					Подтвердить подписку
				</Button>
				<p> * Отказаться можно в любой момент </p>
			</div>
		</form>
	)
}

export default CodeFromSms