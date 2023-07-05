import React, { FC } from 'react'
import { ISubscpition } from '@/store/settings/settings.interface'
import Heading from '@/ui/heading/Heading'
import Subheading from '@/ui/heading/Subheading'
import styles from './subscriptions.module.scss'
const Sub: FC<{ sub: ISubscpition }> = ({
																					sub: {
																						packet_name,
																						packet_id,
																						packet_price,
																						packet_text1,
																						packet_text2,
																						hide,
																					},
																				}) => {
	return (
		hide ? null :
			<div className={styles.sub}>
				<div className={styles.cardActive}>
					<Heading className={styles.period} title={packet_text1}/>
					<Heading className={'text-white text-lg '} title={packet_text2}/>
				</div>
			</div>
	)
}

export default Sub