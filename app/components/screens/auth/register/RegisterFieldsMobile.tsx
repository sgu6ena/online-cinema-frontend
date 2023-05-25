import React, { FC } from 'react'
import Field from '@/ui/form-elemets/Field'
import { validEmail } from '@/shared/regex'
import { LINKS } from '@/config/links'
import {FormState, UseFormRegister} from 'react-hook-form'


interface IAuthFieldsMobile {
	register: UseFormRegister<any>
	formState: FormState<{phone:string}>
}

const RegisterFieldsMobile: FC<IAuthFieldsMobile> = ({
																								register,
																								formState: {errors},
																							}) => {
	return (
		<>
			<Field
				{...register('phone', {
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
				error={errors?.phone}
			/>

			<label className="flex justify-start items-center">
				<input
					{...register('agree', {
						required: 'Вы должны согласиться с условиями',
					})}
					type="checkbox"
				/>
				<span className="mx-3  text-gray-600 text-sm text-left">
					Я согласен с {' '}
					<a href={LINKS.AGREEMENT} target="_blank" className="link" rel="noreferrer">
						{' '} публичными условиями
					</a>
				</span>
			</label>
		</>
	)
}


export default RegisterFieldsMobile