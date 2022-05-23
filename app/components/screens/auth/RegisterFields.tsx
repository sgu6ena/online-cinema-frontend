import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import { validEmail } from '../../../shared/regex'
import Field from '../../ui/form-elemets/Field'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const RegisterFields: FC<IAuthFields> = ({
																			 register,
																			 formState: { errors },
																			 isPasswordRequired,
																		 }) => {
	return (
		<>
			<Field
				{...register('login', {
					required: 'Логин обязательное поле',
					minLength: {
						value: 4,
						message: 'Логин должен содержать не менее 4-х символов ',
					},
					maxLength: {
						value: 50,
						message: 'Логин должен содержать более 50 символов ',
					},

				})}
				placeholder="Логин"
				error={errors.email}
			/>
			<Field
				{...register('email', {
					required: 'E-mail обязательное поле',
					minLength: {
						value: 4,
						message: 'E-mail должен содержать не менее 4-х символов ',
					},
					maxLength: {
						value: 50,
						message: 'E-mail должен содержать более 50 символов ',
					},

				})}
				placeholder="e-mail "
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
							required: 'Пароль обязательное поле',
							minLength: {
								value: 6,
								message: 'Минимальная длина пароля - 6 символов',
							},
						}
						: {}
				)}
				placeholder="Пароль"
				type="password"
				error={errors.password}
			/>
			<Field
				{...register(
					'password2',
					isPasswordRequired
						? {
							required: 'Пароль обязательное поле',
							minLength: {
								value: 6,
								message: 'Минимальная длина пароля - 6 символов',
							},
						}
						: {}
				)}
				placeholder="Повторите пароль"
				type="password2"
				error={errors.password2}
			/>
		</>
	)
}

export default RegisterFields
