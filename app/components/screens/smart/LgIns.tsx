import { FC } from 'react'
import styles from './smart.module.scss'

const LgIns: FC = () => {
	return (
		<div className={styles.instr}>
			<div className={styles.item}>
				<img src='/images/smart/screen1.png'
						 alt='Для подключения подписки PORTAL откройте приложение LG Content Store' />
				<div className={styles.desc}>
					<div className={styles.number}>1</div>
					<p>Для подключения подписки PORTAL откройте приложение LG Content Store.</p>
				</div>

			</div>
			<div className={styles.item}>
				<img src='/images/smart/screen2.png'
						 alt='Откройте строку поиска и затем введите в поисковой строке слово PORTAL' />
				<div className={styles.desc}>
					<div className={styles.number}>2</div>
					<p>Откройте строку поиска и затем введите в поисковой строке слово PORTAL. По результатам поиска
						перейдите в раздел для скачивания приложения, нажав на иконку PORTAL.
					</p>
				</div>

			</div>
			<div className={styles.item}>
					<img src='/images/smart/screen3.png' alt='Для установки приложения PORTAL нажмите кнопку «Установить»' />
				<div className={styles.desc}>
					<div className={styles.number}>3</div>
					<p>Для установки приложения PORTAL нажмите кнопку «Установить»</p>
				</div>

			</div>
			<div className={styles.item}>
				<img src='/images/smart/screen4.png' alt='Введите код подключения' />
				<div className={styles.desc}>
					<div className={styles.number}>4</div>
					<p>Введите код подключения.</p>
				</div>
			</div>
			<img src='/images/smart/screen5.png' alt='Для установки приложения PORTAL нажмите кнопку «Установить»' />
			<h4>Приятного просмотра!</h4>
		</div>
)
}

export default LgIns