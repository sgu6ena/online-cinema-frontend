import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '../../../../../hooks/useActions'
import { useRuble } from '../../../../../hooks/useAuth'
import { ICheckSms } from '../../../../../store/settings/settings.interface'
import Button from '../../../../ui/form-elemets/Button'
import Field from '../../../../ui/form-elemets/Field'
import Heading from '../../../../ui/heading/Heading'

import styles from './modalPay.module.scss'

const CodeFromSms: FC = () => {
	const { checkSMS } = useActions()
	const { register, handleSubmit, formState } = useForm<ICheckSms>({
		mode: 'onChange',
	})

	const promo = useRuble()
	const onSubmit: SubmitHandler<ICheckSms> = (data) => {
		checkSMS({ sms: data.sms, promo: promo || true })
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
