import React, { FC, useEffect } from 'react'
import { useActions } from '@/hooks/useActions'
import { useSettings } from '@/hooks/useSettings'
import { useForm } from 'react-hook-form'
import styles from '@/screens/settings/subscriptions/ModalPay/modalPay.module.scss'
import Button from '@/ui/form-elemets/Button'
import Subheading from '@/ui/heading/Subheading'
import { useRouter } from 'next/router'
import { LINKS } from '@/config/links'

const ApplyPromo: FC<{ setIsShow: (isShow: boolean) => void, code:string, point:string }> = ({ setIsShow , point, code}) => {
	const { changeSubscriptionsPromo } = useActions()
	const { isLoading } = useSettings()
	const { handleSubmit } = useForm({
		mode: 'onChange',
	})
	const {push} = useRouter()
	const onSubmit = () => {
		changeSubscriptionsPromo({mobile:point, code})
		push(LINKS.SUBSCRIPTIONS)
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
				<Subheading title={'Активация промокода'}  />
			</div>
			<div className={styles.footer}>
				<Button type='submit'>Подтвердить</Button>
				<button className={'bg-gray-700 rounded p-2 mt-3'} onClick={(e)=>onCancel(e)}>Отмена</button>
			</div>

		</form>
	)
}

export default ApplyPromo