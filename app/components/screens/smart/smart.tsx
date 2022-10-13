import { FC, useState } from 'react'

import HisenseIns from './HisenseIns'
import LgIns from './LgIns'
import SamsungIns from './SamsungIns'
import styles from './smart.module.scss'

const Smart: FC = () => {
	const [active, setActive] = useState(1)
	return (
		<div className={styles.smart}>
			<h1>
				<span>PORTAL IDC</span>
				НА ТЕЛЕВИЗОРАХ
			</h1>
			<h2>
				Наше приложение доступно на всех популярных телевизорах с функцией Smart
				TV, медиаплеерах и Android TV.
			</h2>
			<img src='/images/smart/main.png' alt='' className={styles.main} />

			<div className={styles.details}>
				<div className={styles.item}>
					<img src='/images/smart/timer.png' alt='Включи и смотри' />
					<h3>Включи и смотри</h3>
					<p>
						Без скачивания на флешку, без кабелей и дополнительного
						оборудования.
					</p>
				</div>
				<div className={styles.item}>
					<img src='/images/smart/galery.png' alt='Библиотека контента' />
					<h3>Библиотека контента</h3>
					<p>Тысячи популярных фильмов, мультфильмов и сериалов.</p>
				</div>
				<div className={styles.item}>
					<img src='/images/smart/vod.png' alt='Управление просмотром' />
					<h3>Управление просмотром</h3>
					<p>
						Смотрите любимое кино, передачи и шоу с начала в любое удобное для
						вас время.
					</p>
				</div>
			</div>

			<div className={styles.instructions}>
				<h2>ИНСТРУКЦИЯ ПО УСТАНОВКЕ</h2>
				<h3>Выберите модель вашего устройства</h3>
				<div className={styles.tabnames}>
					<button
						id={'samsung'}
						className={active == 0 ? styles.active : ''}
						onClick={() => setActive(0)}
					>
						<img
							src={'/svg/smart/hisense.svg'}
							alt='Samsung'
							width={250}
							height={120}
						/>
					</button>
					<button
						id={'lg'}
						className={active == 1 ? styles.active : ''}
						onClick={() => setActive(1)}
					>
						<img src={'/svg/smart/lg.svg'} alt='Lg' width={250} height={120} />
					</button>
					<button
						id={'hisense'}
						className={active == 2 ? styles.active : ''}
						onClick={() => setActive(2)}
					>
						<img
							src={'/svg/smart/samsung.svg'}
							alt='Samsung'
							width={250}
							height={120}
						/>
					</button>
				</div>
				<div>
					<div className={active === 0 ? styles.tab : 'hidden'}>
						<SamsungIns />
					</div>
					<div className={active === 1 ? styles.tab : 'hidden'}>
						<LgIns />
					</div>
					<div className={active === 2 ? styles.tab : 'hidden'}>
						<HisenseIns />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Smart
