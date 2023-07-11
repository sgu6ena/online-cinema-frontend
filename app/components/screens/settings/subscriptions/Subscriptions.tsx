import { FC, useEffect, useState } from 'react'
import { RiListCheck2 } from 'react-icons/ri'

import { useAuth } from '@/hooks/useAuth'
import MaterialIcon from '../../../ui/MaterialIcon'
import Button from '../../../ui/form-elemets/Button'
import Heading from '../../../ui/heading/Heading'
import Subheading from '../../../ui/heading/Subheading'
// import styles from '../settings.module.scss'
import styles from './subscriptions.module.scss'
import Modal from './ModalPay/Modal'
import Pay from './ModalPay/Pay'
import Unsubscribe from './ModalPay/Unsubscribe'
import { useActions } from '@/hooks/useActions'
import { useSubscriptions } from '@/hooks/useSubscriptions'
import Sub from '@/screens/settings/subscriptions/sub'
import { PortalService } from '../../../../api/portal.service'
import ActiveSub from '@/screens/settings/subscriptions/activeSub'


const Subscriptions: FC = () => {
	const { user } = useAuth()
	const isSubscribed = !!user?.paid
	// const date = user?.dtEnd
	// const flow = user?.dtFlow


	const subs = useSubscriptions()
	// const { unsubscription, unflow, sendSms } = PortalService

	const { getSubscriptions } = useActions()
	useEffect(() => {
		getSubscriptions()
	}, [])
	return (
		<div className={styles.subscriptions}>
			{/*<Breadcrumbs breadcrumbs={getSettingsBread('ПОДПИСКА', LINKS.SUBSCRIPTIONS)} />*/}
			<Heading title={'Мои подписки'} className='mb-5' />
			{isSubscribed ?
				<div>
					<ActiveSub point={user?.point} packet_text_end={user?.packet_active_end || ''}
										 packet_text1={user?.packet_active_text1 || ''}
										 packet_text2={user.packet_active_text2 || ''} />
				</div>
				: <Subheading title={'У вас пока нет подписок'} />}
			<Heading title={'Все подписки'} className='my-5' />
			<div className={'flex flex-col  mt-5 flex-wrap gap-2'}>
				{subs.length > 0 ? subs.map(sub => <Sub sub={sub}
																								key={sub.packet_id} isSubscribed={isSubscribed} />) : 'загрузка доступных подписок'}</div>

		</div>
	)
}

export default Subscriptions
