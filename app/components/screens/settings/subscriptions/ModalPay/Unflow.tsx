import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../../../../ui/form-elemets/Button'
import Heading from '../../../../ui/heading/Heading'

import styles from './modalPay.module.scss'
import { useActions } from '@/hooks/useActions'
import { useSettings } from '@/hooks/useSettings'


const Unflow: FC<{ setIsShow: (isShow: boolean) => void }> = ({ setIsShow }) => {
	const { unflow } = useActions()
	const { isLoading } = useSettings()
	const { handleSubmit } = useForm({
		mode: 'onChange',
	})

	const onSubmit = () => {
		unflow()
	}
	useEffect(() => {
		isLoading ? setIsShow(true) : setIsShow(false)
	}, [isLoading])
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.head}>
				<Heading title='Вы уверены?' />
			</div>
			<Button type='submit'>Да, отменить смену подписки</Button>
		</form>
	)
}

export default Unflow
