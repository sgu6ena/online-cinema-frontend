import React, { FC } from 'react'
import Field from '@/ui/form-elemets/Field'
import { validEmail } from '@/shared/regex'
import { LINKS } from '@/config/links'
import {FormState, UseFormRegister} from 'react-hook-form'


interface IAuthFieldsMobile {
	register: UseFormRegister<any>
	formState: FormState<any>
}

const RegisterFieldsMobile: FC<IAuthFieldsMobile> = ({
																								register,
																								formState: {errors},
																							}) => {
	return (
		<>
			<Field
				{...register('login', {
					required: 'Номер телефона обязательное поле',
					maxLength: {
						value: 8,
						message: '8 цифр',
					},
					pattern:{
						value:/^77[456789][0-9]{5}/,
						message:"77XXXXXX"
					}
				})}
				placeholder="номер телефона"
				//@ts-ignore
				error={errors?.login}
			/>
			<Field
				{...register('password', {
					required: 'Пароль обязательное поле',
					minLength: {
						value: 6,
						message: 'Минимальная длина пароля - 6 символов',
					},
				})}
				placeholder="Пароль"
				type="password"
				//@ts-ignore
				error={errors?.password}
			/>
			<Field
				{...register('passwordRpt', {
					required: 'Пароль обязательное поле',
					minLength: {
						value: 6,
						message: 'Минимальная длина пароля - 6 символов',
					},
				})}
				placeholder="Повторите пароль"
				type="password"
				//@ts-ignore
				error={errors?.passwordRpt}
			/>
			<label className="flex justify-start items-start">
				<input
					{...register('agree', {
						required: 'Вы должны согласиться с условиями',
					})}
					type="checkbox"
				/>
				<span className="mx-3 -mt-1 text-gray-600 text-left">
					Я согласен с условиями{' '}
					<a href={LINKS.AGREEMENT} target="_blank" className="link" rel="noreferrer">
						{' '}
						пользовательского соглашения
					</a>
				</span>
			</label>
		</>
	)
}


export default RegisterFieldsMobile