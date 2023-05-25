import {FC} from 'react'
import {FormState, UseFormRegister} from 'react-hook-form'

import Field from '../../../ui/form-elemets/Field'

interface AuthFieldsEmail {
  register: UseFormRegister<any>
  formState: FormState<{login:string, password:string}>
}

const AuthFieldsEmail: FC<AuthFieldsEmail> = ({
                                                register,
                                                formState: { errors },
                                              }) => {
  return (
    <>
      <Field
        {...register('login', {
          required: 'Обязательное поле',
          minLength: {
            value: 4,
            message: 'Логин должен содержать не менее 4-х символов ',
          },
          maxLength: {
            value: 50,
            message: 'Логин должен содержать не более 50 символов ',
          },
        })}
        placeholder="номер телефона или e-mail"
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
        placeholder="пароль"
        type="password"
        error={errors && errors?.password}
      />
    </>
  )
}

export default AuthFieldsEmail
