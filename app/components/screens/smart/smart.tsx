import { FC, useEffect, useLayoutEffect, useState } from 'react'

import HisenseIns from './HisenseIns'
import LgIns from './LgIns'
import SamsungIns from './SamsungIns'
import styles from './smart.module.scss'
import DuneIns from '@/screens/smart/DuneIns'
import { useRouter } from 'next/router'
import AndroidTVIns from '@/screens/smart/AndroidTVIns'

const TABS = ['hisense', 'lg', 'samsung', 'androidtv', 'dune']
const Smart: FC = () => {
	const { asPath, push } = useRouter()

	const [active, setActive] = useState(0)

	useLayoutEffect(() => {
		const idpage = asPath.split('#')[1]
		const index = TABS.indexOf(idpage)
		if (index !== -1) {
			setActive(index)
		}
	}, [asPath])

	const setActiveId = (id: number) => {
		const pageUrl = asPath.split('#')[0]
		setActive(id)
		push(pageUrl + '#' + TABS[id])
	}

	useEffect(() => {
	}, [asPath])
	return (
		<div className={styles.smart}>
			<h1 className={'mb-10 '}>
				<span className={'gradient-text font-black'}>PORTAL</span>
				НА ТЕЛЕВИЗОРАХ
			</h1>
			<div className='flex items-center'>
				<p className={'lg:w-1/2 text-2xl w-full p-14'}>
					PORTAL доступен на следующих моделях телевизоров:
					<ul className={'list-disc ml-10'}>
						<li>Smart TV Samsung (Tizen OS 5 и выше) — с 2020 года выпуска;</li>
						<li>Smart TV LG (Web OS 5.0 и выше) — c 2020 года выпуска;</li>
						<li>Smart TV Hisense (VIDAA OS 4 и выше) - c 2020 года выпуска;</li>
						<li>Устройствах с Android OS 7 и выше;</li>
						<li>Медиаплеерах DunеHD.</li>
					</ul>

				</p>


				<img src='/images/smart/main.png' alt='' className={'lg:w-1/2 w-full'} />
			</div>


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

				<div className={styles.tabnames}>
					<button
									className={active == 0 ? styles.active : ''}
						onClick={() => setActiveId(0)}
					>
						<span className={'p-8'}>Hisense</span>
					</button>
					<button
						className={active == 1 ? styles.active : ''}
						onClick={() => setActiveId(1)}
					>
						<span className={'p-8'}>LG</span>
					</button>
					<button
						className={active == 2 ? styles.active : ''}
						onClick={() => setActiveId(2)}
					>
						<span className={'p-8'}>Samsung</span>
					</button>
					<button
						className={active == 3 ? styles.active : ''}
						onClick={() => setActiveId(3)}
					>

						<span className={'p-8'}>Android TV</span>
					</button>
					<button
						className={active == 4 ? styles.active : ''}
						onClick={() => setActiveId(4)}
					>
						<span className={'p-8'}>Dune</span>
					</button>
				</div>
				<div>
					<div className={active === 0 ? styles.tab : 'hidden'}>
						<HisenseIns />
					</div>
					<div className={active === 1 ? styles.tab : 'hidden'}>
						<LgIns />
					</div>
					<div className={active === 2 ? styles.tab : 'hidden'}>
						<SamsungIns />
					</div>
					<div className={active === 3 ? styles.tab : 'hidden'}>
						<AndroidTVIns />
					</div>
					<div className={active === 4 ? styles.tab : 'hidden'}>
						<DuneIns />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Smart
