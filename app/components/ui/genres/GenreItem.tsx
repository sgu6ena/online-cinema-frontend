import Link from 'next/link'
import { FC } from 'react'

import { getGenreUrl } from '@/config/url.config'
import { IMainGenreItem } from '@/shared/types/movie.types'

import { genreIcons } from './genreIcons'
import styles from './genres.module.scss'

const GenreItem: FC<{ genre: IMainGenreItem }> = ({ genre }) => {
	return (
		<Link href={getGenreUrl(genre.id.toString())}>
			<a className={styles.item}>
				<img
					src={
						genreIcons.find((item) => item.id === genre.id)?.icon ||
						genreIcons.find((item) => item.id === 0)?.icon ||
						''
					}
					className={styles.img}

					alt={genre.title}
				/>
				{genre.title}
			</a>
		</Link>
	)
}

export default GenreItem
