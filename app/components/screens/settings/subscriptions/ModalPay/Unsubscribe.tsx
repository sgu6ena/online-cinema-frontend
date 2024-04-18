import React, { FC,  useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../../../../ui/form-elemets/Button'
import Heading from '../../../../ui/heading/Heading'

import styles from './modalPay.module.scss'
import { useActions } from '@/hooks/useActions'
import { useSettings } from '@/hooks/useSettings'


const Unsubscribe: FC<{ setIsShow: (isShow: boolean) => void }> = ({ setIsShow }) => {
	const { unsubscribe, getSubscriptions, getUserData } = useActions()
	const { isLoading } = useSettings()
	const { handleSubmit } = useForm({
		mode: 'onChange',
	})

	const onSubmit = async () => {
		const unf = await 		unsubscribe()
		const subs = 	await getSubscriptions()
		getUserData()
	}


	const onCancel = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
		e.preventDefault()
		setIsShow(false)
	}

	useEffect(() => {
		isLoading ? setIsShow(true) : setIsShow(false)
	}, [isLoading])
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.head}>
				<Heading title='Отмена подписки' />
				<p className={'pt-4'}>Вы уверены, что хотите отменить подписку? Подписка отключится по истечении оплаченного периода</p>
			</div>
			<div className={styles.footer}>
				<Button type='submit'>Да</Button>
				<button className={'bg-gray-700 rounded p-2 mt-3'} onClick={(e)=>onCancel(e)}>Нет</button>
			</div>

		</form>
	)
}

export default Unsubscribe
