import { FC } from 'react'

import { SiKinopoisk } from 'react-icons/si'

import styles from './rating.module.scss'

export interface IRating {
	imdb?: number
	kp?: number
}

const Rating: FC<IRating> = ({ imdb, kp }) => {
	return (
		<div className={styles.rate}>
			{!!kp && (
				<div className={styles.item}>
					<SiKinopoisk />
					<div>{kp && Math.trunc(kp * 10) / 10}</div>
				</div>
			)}
			{!!imdb && (
				<div className={styles.item}>
					<div className={styles.imdb}>IMDb</div>
					<div>{imdb && Math.trunc(imdb * 10) / 10}</div>
				</div>
			)}
		</div>
	)
}

export default Rating
