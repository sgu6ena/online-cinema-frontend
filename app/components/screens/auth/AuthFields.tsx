import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import { validEmail } from '../../../shared/regex'
import Field from '../../ui/form-elemets/Field'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'E-mail обязательное поле',
					minLength: {
						value: 4,
						message: 'Логин должен содержать не менее 4-х символов ',
					},
					maxLength: {
						value: 50,
						message: 'Логин должен содержать более 50 символов ',
					},

				})}
				placeholder="e-mail или  логин"
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
				placeholder="password"
				type="password"
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields
