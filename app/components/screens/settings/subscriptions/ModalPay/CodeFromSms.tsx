import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '@/hooks/useActions'
import { useAuth, useRuble } from '@/hooks/useAuth'
import { ICheckSms } from '@/store/settings/settings.interface'
import Button from '../../../../ui/form-elemets/Button'
import Field from '../../../../ui/form-elemets/Field'
import Heading from '../../../../ui/heading/Heading'

import styles from './modalPay.module.scss'
import { useSettings } from '@/hooks/useSettings'


const CodeFromSms: FC<{ id: number|string, text: string,  isPromo?:boolean, isSubscribed:boolean}> = ({text, id, isPromo, isSubscribed}) => {
	const { checkSMS, checkSMSPromo } = useActions()
	const { register, handleSubmit, formState } = useForm<ICheckSms>({
		mode: 'onChange',
	})

	const { user } = useAuth()
	const { isPromoAvailable, error, isError, isPayed } = useSettings()

	const onSubmit: SubmitHandler<ICheckSms> = (data) => {
		isPromo ? isSubscribed ? console.log('смена подписки') : checkSMSPromo({ sms: data.sms, code: id.toString() })
			:
		isSubscribed?console.log('смена подписки'):checkSMS({ sms: data.sms, service: id })
	}

	return (!isPayed ?
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.head}>
				<Heading title='Введите код из SMS' />
				<p>На указанный вами номер телефона выслан код подтверждения</p>
			</div>
			{isError && <p className={'text-primary text-sm text-center'}>
				{error}
			</p>}

			<Field
				{...register('sms', {
					required: 'Обязательное поле',
				})}
				placeholder='код из SMS '
				error={formState.errors && formState.errors.sms}
			/>
			<div className={styles.footer}>
				<strong>{text}</strong>
				<Button type='submit'>
				 Подтвердить подписку
				</Button>
				<p>Отказаться можно в любой момент </p>
			</div>
		</form> :
		<p>подписка куплена</p>
)
}

export default CodeFromSms
