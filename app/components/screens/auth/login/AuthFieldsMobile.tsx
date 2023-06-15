import {FC} from 'react'
import {FormState, UseFormRegister} from 'react-hook-form'

import Field from '../../../ui/form-elemets/Field'
import { validEmail, validMobile } from '@/shared/regex'

interface AuthFieldsMobile {
	register: UseFormRegister<any>
	formState: FormState<{ login: string, password: string }>
}

const AuthFieldsMobile: FC<AuthFieldsMobile> = ({
																								register,
																								formState: { errors }
																							}) => {
	return (
		<>
			<Field
				{...register('login', {
					required: 'Логин обязательное поле',
					validate: (value) => {
						return (
							[validMobile, validEmail].some((pattern) =>
								pattern.test(value),
							) || 'введите телефон в формате 77ХХХХХХ или email'
						);
					},
				})}
				placeholder="Мобильный телефон / email / логин"
				error={errors && errors.login}
			/>
			<Field
				{...register(
					'password',
					{
							required: 'Пароль обязательное поле',
							minLength: {
								value: 6,
								message: 'Минимальная длина пароля - 6 символов',
							},
						}
				)}
				placeholder='Пароль'
				type='password'
				error={errors && errors.password}
			/>
		</>
	)
}

export default AuthFieldsMobile
