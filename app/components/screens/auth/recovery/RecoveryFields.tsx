import {FC} from 'react'
import {FormState, UseFormRegister} from 'react-hook-form'

import Field from '../../../ui/form-elemets/Field'


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
				{...register('email', {
					required: 'email обязательное поле',
					minLength: {
						value: 4,
						message: 'email должен содержать не менее 4-х символов ',
					},
					maxLength: {
						value: 50,
						message: 'email должен содержать не более 50 символов ',
					},
				})}
				placeholder="e-mail"
				//@ts-ignore
				error={errors && errors.email}
			/>

		</>
	)
}

export default RecoveryFields
