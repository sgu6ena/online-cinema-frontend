import Link from 'next/link'
import { FC } from 'react'

import styles from './AuthPlaсeholder.module.scss'
import { LINKS } from '@/config/links'

const ProfilePlaceholder: FC = () => {
	return (
		<div className={styles.placeholder}>
			<div>
				<div>Оформление новых подписок недоступно. Предлагаем воспользоваться новой услугой <a className={'underline underline-offset-4'} href='https://idc.md/tv/iptv/mediateka'>«IPTV Медиатека»</a></div>

			</div>
		</div>
	)
}

export default ProfilePlaceholder
