import Link from 'next/link'
import { FC } from 'react'

import { LINKS } from '../../../../../config/links'
import Button from '../../../../ui/form-elemets/Button'
import Field from '../../../../ui/form-elemets/Field'
import Heading from '../../../../ui/heading/Heading'

import styles from './modalPay.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '../../../../../hooks/useActions'
import { useLoadingSendSMS } from '../../../../../hooks/useSettings'


interface IPay {
	phone: string
	acceptTerms: boolean
}

const Pay: FC = () => {
	const { sendSMS } = useActions()
	const { isLoading } = useLoadingSendSMS()
	const {
		register,
		handleSubmit,
		formState,
	} = useForm<IPay>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IPay> = (data) => {
		sendSMS({ mobile: data.phone })
	}

	return (
		<>
			{isLoading ? <p>Loading...</p> :
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.head}>
						<Heading title='Подписка' />
						<p>14 дней за 1 рубль, далее 32 RUP</p>
					</div>
					<div>
						<Field
							{...register('phone', {
								required: 'Обязательное поле',
								pattern: {
									value: /[7][7][0-9]{6}/,
									message: 'Неккорректный номер (77ХХХХХХ)',
								},
								minLength: {
									value: 8,
									message: 'Недостаточно символов',
								},
								maxLength: {
									value: 8,
									message: 'Лишние символы',
								},
							})}
							placeholder='номер телефона '
							error={formState.errors && formState.errors.phone}
						/>

						<label className={styles.checkbox}>
							<input type='checkbox' {...register('acceptTerms', { required: 'Обязательное поле' })} id='acceptTerms' />
							<span>
						Я согласен с{' '}
								<Link href={LINKS.AGREEMENT}>
							<a target='_blank'>
								уловиями договора пользовательского соглашения
							</a>
						</Link>{' '}
								и даю свое согласие на{' '}
								<Link href={LINKS.PROCESSING}>
							<a target='_blank'>обработку моих персональных данных</a>
						</Link>
					</span>
						</label>
					</div>
					<div className={styles.footer}>
						<Button type='submit' disabled={!formState.isValid}>Отправить SMS</Button>
						<p> * Отказаться можно в любой момент </p>
					</div>
				</form>}
		</>
	)
}

export default Pay
