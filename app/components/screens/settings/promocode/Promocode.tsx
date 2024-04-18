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
import { useAuth, usePoint } from '@/hooks/useAuth'
import InfoPromocode from '@/screens/settings/promocode/InfoPromocode'
import Subheading from '@/ui/heading/Subheading'
import ApplyPromo from '@/screens/settings/subscriptions/ModalPay/applyPromo'


const PromoCode: FC = () => {

	// const { promoCode } = useActions()
	const { register, handleSubmit } = useForm({
		mode: 'onChange',
	})
	const { user } = useAuth()
	const isSubscribed = !!user?.paid
	const [promocode, setPromocode] = useState('')
	const [isShowModal, setShowModal] = useState(false)
	const { data, updateAsync, isLoading, isError } = usePromocode()

	const point = usePoint()
	const isPoint = Boolean(point)

	const onSubmit: SubmitHandler<any> = (data) => {
		updateAsync(data).then(() => {
			setPromocode(data.code)
		})
	}

	const paySubscription = () => {
		setShowModal(true)
	}

	return (
		<div>
			<div className={styles.card}>
				<Subheading title={'АКТИВАЦИЯ ПРОМОКОДА'} />
				{
					isLoading ?
						<p className={styles.card}>загрузка</p> :
						data ? <>
								<InfoPromocode point={point ? point : null} data={data} onClick={paySubscription} />
								{isShowModal ? isPoint ? <Modal setIsShow={setShowModal}>
										<ApplyPromo point={point as string} code={promocode} setIsShow={setShowModal} />
									</Modal> :
								<Modal setIsShow={setShowModal}>
									{<Pay setIsShow={setShowModal} isSubscribed={isSubscribed} id={promocode} isPromo={true}
												text={data.period + ' - ' + data.discount + '% / ' + data.price + ' руб.'} />}
								</Modal> : null
								}
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
		</div>
	)
}

export default PromoCode
