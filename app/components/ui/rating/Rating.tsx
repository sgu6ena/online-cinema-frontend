import { FC } from 'react'
import { SiKinopoisk } from 'react-icons/si'

import styles from './rating.module.scss'

export interface IRating {
	imdb?: number
	kp?: number
}

const Rating: FC<IRating> = ({ imdb, kp }) => {
	return (
		<strong className={styles.rate}>
			{!!kp && (
				<strong className={styles.item}>
					<SiKinopoisk />
					<strong>{kp && Math.trunc(kp * 10) / 10}</strong>
				</strong>
			)}
			{!!imdb && (
				<strong className={styles.item}>
					<strong className={styles.imdb}>IMDb</strong>
					<strong>{imdb && Math.trunc(imdb * 10) / 10}</strong>
				</strong>
			)}
		</strong>
	)
}

export default Rating
