import React, { FC } from 'react'
import Button from '@/ui/form-elemets/Button'
import { usePoint } from '@/hooks/useAuth'

export interface IPromocodeInfo {
	date_start: string
	discount: string
	partner: boolean
	period: string
	price: number
}

const InfoPromocode: FC<{ point: string | null, data: IPromocodeInfo, onClick: () => void }> = ({
																																																	data,
																																																	point,
																																																	onClick,
																																																}) => {
	const isPartner = data.partner


	return <div className={'flex flex-col gap-4'}>
		<div className={' text-sm text-gray-500'}>Подписка по промокоду начнет действовать с {data.date_start}</div>
		<div className={'flex justify-between'}>
			<div className={'max-w-[250px] text-sm text-gray-500'}>Подписка</div>
			<div>{data.period}</div>
		</div>
		<div className={'flex justify-between'}>
			<div className={'max-w-[250px] text-sm text-gray-500'}>Стоимость</div>
			<div>{data.price} рублей</div>
		</div>
		{!isPartner && <>
			<div className={'flex justify-between'}>
				<div className={'max-w-[250px] text-sm text-gray-500'}>Дата первого платежа</div>
				<div>{data.date_start}</div>
			</div>
			{point ? <div className={'flex justify-between'}>
				<div className={'max-w-[250px] text-sm text-gray-500'}>Списание дежежных средств произойдет с номера телефона
				</div>
				<div>{point}</div>
			</div> : null}
		</>
		}
		<p className={' text-sm text-gray-500'}>Отменить подписку можно в разделе &ldquo;Мои подписки&rdquo;</p>
		<Button className={'w-full'} onClick={onClick}>Оформить подписку</Button>
	</div>

}

export default InfoPromocode