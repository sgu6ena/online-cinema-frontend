import { FC } from 'react'
import { FaImdb } from 'react-icons/fa'
import { SiKinopoisk } from 'react-icons/si'

import styles from '../screens/movie/Movie.module.scss'

export interface IRating {
	imdb: number
	kp: number
	age?: string
}

const Rating: FC<IRating> = ({ imdb, kp, age }) => {
	return (
		<div className={styles.rating}>
			<FaImdb />
			<span className="mx-1">{imdb.toFixed(1)}</span>
			<SiKinopoisk />
			<span>{kp.toFixed(1)}</span>
			{age && <span className="btn-primary rounded p-1 ml-5">{age}</span>}
		</div>
	)
}

export default Rating
