import React, { FC, useState } from 'react'

import Button from '../../../ui/form-elemets/Button'
import Field from '../../../ui/form-elemets/Field'
import Heading from '../../../ui/heading/Heading'
import styles from '../settings.module.scss'
import { useActions } from '@/hooks/useActions'
import { SubmitHandler, useForm } from 'react-hook-form'
import { usePromocode } from '@/screens/settings/promocode/usePromocode'
import Modal from '@/screens/settings/subscriptions/ModalPay/Modal'
import Pay from '@/screens/settings/subscriptions/ModalPay/Pay'
import { useAuth } from '@/hooks/useAuth'


const PromoCode: FC = () => {

	// const { promoCode } = useActions()
	const { register, handleSubmit } = useForm({
		mode: 'onChange',
	})
	const { user } = useAuth()
	const isSubscribed = !!user?.paid
	const [promocode, setPromocode] = useState('')
	const [isShowModal, setShowModal] = useState(false)

	const { data, updateAsync, isLoading } = usePromocode()
	const onSubmit: SubmitHandler<any> = (data) => {
		updateAsync(data).then(() => {
			setPromocode(data.code)
		})
	}
	return (
		<div>

			<Heading title={'АКТИВАЦИЯ ПРОМОКОДА'} className='mb-5' />
			{
				isLoading ? <p className={styles.card}>...</p> :
					data ? <>
							<div className={styles.card}>
								<p>Промокод: {promocode}</p>
								<p>Скидка: {data.discount}%</p>
								<p>Длительность подписки: {data.period}</p>
								<p>Итоговая цена: {data.price}</p>
								<Button className={'w-full'} onClick={() => {
									setShowModal(true)
								}}>Купить</Button>
							</div>
							{isShowModal && (
								<Modal setIsShow={setShowModal}>
									{<Pay isSubscribed={isSubscribed} id={promocode} text={data.period + ' - ' + data.discount + '% / ' + data.price} />}
								</Modal>
							)}


						</> :
						<form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
							<Field
								{...register('code', {
									required: 'Обязательное поле',
								})}
								placeholder='введите промокод '
								size={30}
							/>
							<Button className={'w-full'}>Проверить</Button>
						</form>
			}

		</div>
	)
}

export default PromoCode
