import Link from 'next/link';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { LINKS } from '@/config/links';
import { useActions } from '@/hooks/useActions';
import Button from '../../../../ui/form-elemets/Button';
import Field from '../../../../ui/form-elemets/Field';
import Heading from '../../../../ui/heading/Heading';

import styles from './modalPay.module.scss';
import { useAuth } from '@/hooks/useAuth'
import { changeSubscriptions } from '@/store/settings/settings.actions'



interface ISendSms {
	phone: string
	acceptTerms: boolean
}

const SendSms: FC<{ id: number | string, text: string, isPromo?: boolean, isSubscribed: boolean }> = ({
																																																				text,
																																																				id,
																																																				isPromo,
																																																				isSubscribed,
																																																			}) => {
	const { sendSMS, sendSMSPromo, changeSubscriptions, changeSubscriptionsPromo } = useActions()
	const { register, handleSubmit, formState } = useForm<ISendSms>({
		mode: 'onChange',
	})
	const onSubmit: SubmitHandler<ISendSms> = (data) => {
		if (isPromo) {
			isSubscribed ?
				changeSubscriptionsPromo({
					mobile: data.phone,
					code: id as string,
				})
				:
				sendSMSPromo({
					mobile: data.phone,
					code: id as string,
				})
		} else {
			isSubscribed ?
				changeSubscriptions({
					mobile: data.phone,
					service: id as string,
				}) :
				sendSMS({
					mobile: data.phone,
					service: id,
				})
		}
	}
	const { user } = useAuth()
	return (

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.head}>
					<Heading title="Подписка" />
					<p>{text}</p>
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
							</span>
					</label>
				</div>
				<div className={styles.footer}>
					<Button type="submit" disabled={!formState.isValid}>
						Отправить SMS
					</Button>
					<p>Отказаться можно в любой момент </p>
				</div>
			</form>

	)
}

export default SendSms