import {FC} from 'react'
import {FormState, UseFormRegister} from 'react-hook-form'

import {LINKS} from '@/config/links'
import {validEmail} from '@/shared/regex'
import Field from '../../../ui/form-elemets/Field'

interface IAuthFields {
  register: UseFormRegister<any>
  formState: FormState<{ login:string, email:string }>
}

const RegisterFieldsEmail: FC<IAuthFields> = ({
                                           register,
                                           formState: {errors},
                                         }) => {
  return (
    <>
      {/*<Field*/}
      {/*  {...register('login', {*/}
      {/*    required: 'Логин обязательное поле',*/}
      {/*    minLength: {*/}
      {/*      value: 4,*/}
      {/*      message: 'Логин должен содержать не менее 4-х символов ',*/}
      {/*    },*/}
      {/*    maxLength: {*/}
      {/*      value: 50,*/}
      {/*      message: 'Логин должен содержать не более 50 символов ',*/}
      {/*    },*/}
      {/*  })}*/}
      {/*  placeholder="Логин"*/}
      {/*  error={errors?.login}*/}
      {/*/>*/}
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
        error={errors?.email}
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

export default RegisterFieldsEmail
