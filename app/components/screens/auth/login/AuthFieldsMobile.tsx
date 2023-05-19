import {FC} from 'react'
import {FormState, UseFormRegister} from 'react-hook-form'

import Field from '../../../ui/form-elemets/Field'

interface AuthFieldsMobile {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFieldsMobile: FC<AuthFieldsMobile> = ({
																								register,
																								formState: { errors },
																								isPasswordRequired,
																							}) => {
	return (
		<>
			<Field
				{...register('login', {
					required: 'Логин обязательное поле',
					validate: (value) => {
						return (
							[/^77[456789][0-9]{5}$/, /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/].some((pattern) =>
								pattern.test(value)
							) || "введите телефон 77ХХХХХХ или email"
						);
					},
				})}
				placeholder="Мобильный телефон / email"
				//@ts-ignore
				error={errors && errors.login}
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
				//@ts-ignore
				error={errors && errors.password}
			/>
		</>
	)
}

export default AuthFieldsMobile
