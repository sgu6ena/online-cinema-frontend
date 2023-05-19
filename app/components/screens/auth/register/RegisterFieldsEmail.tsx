import {FC} from 'react'
import {FormState, UseFormRegister} from 'react-hook-form'

import {LINKS} from '@/config/links'
import {validEmail} from '@/shared/regex'
import Field from '../../../ui/form-elemets/Field'

interface IAuthFields {
  register: UseFormRegister<any>
  formState: FormState<any>
}

const RegisterFieldsEmail: FC<IAuthFields> = ({
                                           register,
                                           formState: {errors},
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
            message: 'Логин должен содержать не более 50 символов ',
          },
        })}
        placeholder="Логин"
        //@ts-ignore
        error={errors?.login}
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
            message: 'E-mail должен содержать не более 50 символов ',
          },
          pattern: {
            value: validEmail,
            message: 'Некорректный email',
          },
        })}
        placeholder="e-mail "
        //@ts-ignore
        error={errors?.email}
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

export default RegisterFieldsEmail
