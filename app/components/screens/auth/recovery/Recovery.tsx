import Link from 'next/link'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { LINKS } from '@/config/links'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import Meta from '../../../../utils/meta/Meta'

import Button from '../../../ui/form-elemets/Button'
import Heading from '../../../ui/heading/Heading'
import styles from '../Auth.module.scss'
import { IRecoveryInput } from '../auth.interface'


import RecoveryFields from './RecoveryFields'
import { validEmail, validMobile } from '@/shared/regex'
import { useRouter } from 'next/router'

const Recovery: FC = () => {
	const {
		register: registerInput,
		handleSubmit,
		formState,
	} = useForm<any>({ mode: 'onBlur' })

	const { isLoading } = useAuth()
	const { recovery, recoveryByPhone } = useActions()
	const onSubmit: SubmitHandler<IRecoveryInput> = (data) => {
		if (data.login?.match(validMobile))
			recoveryByPhone(data.login)
		else if (data.login?.match(validEmail))
			recovery(data.login)
	}

	return (
		<>
			<Meta title="Забыли пароль" />
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					{!isLoading &&
						<>
							<Heading title={'Забыли пароль?'} className="mb-3" />
							<Heading
								title="Введите email или номер телефона вашего аккаунта, на который мы отправим новый пароль"
								className="text-gray-500  text-sm mb-8"
							/>
							<RecoveryFields register={registerInput} formState={formState} />

							<div className={styles.buttons}>
								<Button type="submit" >
									Отправить новый пароль
								</Button>
							</div>
							{/*<p>*/}
							{/*	Еще нет аккаунта?{' '}*/}
							{/*	<Link href={LINKS.REGISTER}>*/}
							{/*		<a className="link text-primary"> Зарегистрируйтесь</a>*/}
							{/*	</Link>*/}
							{/*</p>*/}
						</>
					}
				</form>
			</section>
		</>
	)
}

export default Recovery
