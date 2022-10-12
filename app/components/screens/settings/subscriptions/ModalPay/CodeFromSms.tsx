import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '../../../../../hooks/useActions'
import { useAuth, useRuble } from '../../../../../hooks/useAuth'
import { ICheckSms } from '../../../../../store/settings/settings.interface'
import Button from '../../../../ui/form-elemets/Button'
import Field from '../../../../ui/form-elemets/Field'
import Heading from '../../../../ui/heading/Heading'

import styles from './modalPay.module.scss'
import { useSettings } from '../../../../../hooks/useSettings'

const CodeFromSms: FC = () => {
	const { checkSMS } = useActions()
	const { register, handleSubmit, formState } = useForm<ICheckSms>({
		mode: 'onChange',
	})

	const { user } = useAuth()
	const { isPromoAvailable } = useSettings()

	const isPromo = isPromoAvailable && user?.promo === true
	const inNoRubble = !isPromoAvailable && user?.promo === true
	const onSubmit: SubmitHandler<ICheckSms> = (data) => {
		checkSMS({ sms: data.sms, promo: isPromo ? 'true' : 'false' })
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.head}>
				<Heading title='Введите код из SMS' />
				<p>На указанный вами номер телефона выслан код подтверждения</p>
			</div>
			<p className={'text-primary text-sm text-center'}>
				{inNoRubble && 'PORTAL за рубль недоступен, но вы можете приобрести подписку за 32 RUP. Для подтвержения  введите код из смс.'}</p>
			<Field
				{...register('sms', {
					required: 'Обязательное поле',
				})}
				placeholder='код из SMS '
				error={formState.errors && formState.errors.sms}
			/>
			<div className={styles.footer}>
				<Button type='submit' disabled={!formState.isValid}>
					{isPromoAvailable ? 'Подтвердить подписку' : 'Купить подписку за 32 RUP'}
				</Button>
				<p> * Отказаться можно в любой момент </p>
			</div>
		</form>
	)
}

export default CodeFromSms
