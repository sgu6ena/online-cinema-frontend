import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../../../../ui/form-elemets/Button'
import Heading from '../../../../ui/heading/Heading'

import styles from './modalPay.module.scss'
import { useActions } from '../../../../../hooks/useActions'
import { useSettings } from '../../../../../hooks/useSettings'

const Unsubscribe: FC<{ setIsShow: (isShow: boolean) => void }> = ({ setIsShow }) => {
	const { unsubscribe } = useActions()
	const { isLoading } = useSettings()
	const { handleSubmit } = useForm({
		mode: 'onChange',
	})

	const onSubmit = () => {
		unsubscribe()
	}
	useEffect(() => {
		isLoading ? setIsShow(true) : setIsShow(false)
	}, [isLoading])
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.head}>
				<Heading title='Вы уверены?' />
			</div>
			<Button type='submit'>Да, отменить подписку</Button>
		</form>
	)
}

export default Unsubscribe
