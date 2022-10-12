import Link from 'next/link';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { LINKS } from '../../../../../config/links';
import { useActions } from '../../../../../hooks/useActions';
import Button from '../../../../ui/form-elemets/Button';
import Field from '../../../../ui/form-elemets/Field';
import Heading from '../../../../ui/heading/Heading';

import styles from './modalPay.module.scss';
import { useAuth } from '../../../../../hooks/useAuth'


interface ISendSms {
	phone: string
	acceptTerms: boolean
}

const SendSms:FC = () => {
	const { sendSMS } = useActions()
	const { register, handleSubmit, formState } = useForm<ISendSms>({
		mode: 'onChange',
	})
	const onSubmit: SubmitHandler<ISendSms> = (data) => {
		sendSMS({ mobile: data.phone })
	}
	const { user } = useAuth()
	return (

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.head}>
					<Heading title="Подписка" />
					<p>{user?.promo? '14 дней за 1 RUP, далее 32 RUP':'32 RUP в месяц'}</p>
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
						placeholder="номер телефона (77XXXXXX)"
						error={formState.errors && formState.errors.phone}
					/>

					<label className={styles.checkbox}>
						<input
							type="checkbox"
							{...register('acceptTerms', { required: 'Обязательное поле' })}
							id="acceptTerms"
						/>
						<span>
								Я согласен с{' '}
							<Link href={LINKS.AGREEMENT}>
									<a target="_blank">
										условиями договора пользовательского соглашения
									</a>
								</Link>{' '}
							{/*и даю свое согласие на{' '}*/}
							{/*<Link href={LINKS.PROCESSING}>*/}
							{/*		<a target="_blank">обработку моих персональных данных</a>*/}
							{/*	</Link>*/}
							</span>
					</label>
				</div>
				<div className={styles.footer}>
					<Button type="submit" disabled={!formState.isValid}>
						Отправить SMS
					</Button>
					<p> * Отказаться можно в любой момент </p>
				</div>
			</form>

	)
}

export default SendSms