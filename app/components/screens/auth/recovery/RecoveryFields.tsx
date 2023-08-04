import {FC} from 'react'
import {FormState, UseFormRegister} from 'react-hook-form'

import Field from '../../../ui/form-elemets/Field'
import { validEmail, validMobile } from '@/shared/regex'


interface IRecoveryFields {
	register: UseFormRegister<any>
	formState: FormState<any>
}

const RecoveryFields: FC<IRecoveryFields> = ({
																			 register,
																			 formState: {errors},
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
							) || "Неверный e-mail или телефон"
						);
					},
				})}
				placeholder="Мобильный телефон / email"
				//@ts-ignore
				error={errors && errors.login}
			/>
		</>
	)
}

export default RecoveryFields
