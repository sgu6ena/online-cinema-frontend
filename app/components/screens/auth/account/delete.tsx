//@apply mx-auto  air-block bg-opacity-80 p-7 text-center;

import React, { FC } from 'react'
import Heading from '@/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import styles from '@/screens/auth/Auth.module.scss'
import { useAuth } from '@/hooks/useAuth'
import Button from '@/ui/form-elemets/Button'
import { useRouter } from 'next/router'
import { LINKS } from '@/config/links'
import AuthButton from '@/ui/videoPlayer/Placeholder/AuthButton'
import Link from 'next/link'
import { getMoviesUrl } from '@/config/api.config'

const Delete: FC = () => {
	const { user } = useAuth()
	const isUser = Boolean(user)
	const {push} = useRouter()

	return (
		<>
			<Meta title='Удаление аккаунта' />
			<section className={styles.wrapper}>
				<div className={styles.form}>
					<Heading title={'Удаление аккаунта'} />
					<Heading
						title='Вы инициируете процесс удаления персональных данных с серверов portal.idc.md.'
						className='text-lg mt-8'
					/>
					<div className={'text-primary my-4  text-xl font-bold'}>
						Внимание! Операция удаления аккаунта необратима. Вернуть
						или восстановить данные неозможно.
					</div>
					<Heading
						title='Будет удален
						аккаунт, избранное, история просмотра'
						className='text-lg mb-8'
					/>

					{isUser ?
						<div className={'flex gap-2 justify-center'}>
							<Button>Удалить аккаунт</Button>
							<Button style={{background:'gray'}} onClick={()=>push('/')}>Отмена</Button>
						</div>
					 :
						<>
							<p> Для  удаления необходимо авторизоваться</p>
							<Link href={`/auth?redirect=account/delete`}>
								<a><Button>Aвторизоваться</Button></a>
							</Link>
						</>}

				</div>
			</section>
		</>
	)
}

export default Delete