import { FC } from 'react'


import { useAuth } from '@/hooks/useAuth'

import Heading from '../../../ui/heading/Heading'
import Subheading from '../../../ui/heading/Subheading'
import styles from './subscriptions.module.scss'

import ActiveSub from '@/screens/settings/subscriptions/activeSub'
import NextSub from '@/screens/settings/subscriptions/nextSub'


const Subscriptions: FC = () => {
	const { user } = useAuth()
	const isSubscribed = !!user?.paid


	return (
		<div className={styles.subscriptions}>

			{isSubscribed ?
				<div className={'flex flex-col  mt-5 flex-wrap gap-2'}>
					<Heading title={'Мои подписки'} className='mb-5' />
					<ActiveSub point={user?.point} packet_text_end={user?.packet_active_end || ''}
										 packet_text1={user?.packet_active_text1 || ''}
										 packet_text2={user.packet_active_text2 || ''} />
					{user?.packet_next_start &&
						<NextSub packet_text_start={user?.packet_next_start || ''} price={user?.packet_next_price}
										 packet_text2={user.packet_next_text2 || ''} packet_text1={user.packet_next_text1 || ''}
										 point={user?.point} />}
				</div>
				: <Subheading title={'У вас нет подписок'} />}

			<div className={'flex flex-col  mt-5 flex-wrap gap-2'}>
				<p>Оформление новых подписок недоступно. Предлагаем воспользоваться новой услугой <a href='https://idc.md/tv/iptv/mediateka' className='underline' target='_blank'>«IPTV Медиатека»</a></p>

			</div>

		 </div>
	)
}

export default Subscriptions
