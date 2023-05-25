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
			{/*<Field*/}
			{/*	{...register('email', {*/}
			{/*		required: 'email обязательное поле',*/}
			{/*		minLength: {*/}
			{/*			value: 4,*/}
			{/*			message: 'email должен содержать не менее 4-х символов ',*/}
			{/*		},*/}
			{/*		maxLength: {*/}
			{/*			value: 50,*/}
			{/*			message: 'email должен содержать не более 50 символов ',*/}
			{/*		},*/}
			{/*	})}*/}
			{/*	placeholder="номер телефона / e-mail"*/}
			{/*	//@ts-ignore*/}
			{/*	error={errors && errors.email}*/}
			{/*/>*/}
			<Field
				{...register('login', {
					required: 'Логин обязательное поле',
					validate: (value) => {
						return (
							[validMobile, validEmail].some((pattern) =>
								pattern.test(value),
							) || "введите телефон в формате 77ХХХХХХ или email"
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
