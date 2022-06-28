import { FC } from 'react'
import { IMainGenreItem } from '../../../shared/types/movie.types'
import Link from 'next/link'
import { getGenreUrl } from '../../../config/url.config'

import styles from "./genres.module.scss"
import { genreIcons } from './genreIcons'

const GenreItem: FC<{ genre: IMainGenreItem }> = ({ genre }) => {
	return (
		<Link href={getGenreUrl(genre.id.toString())}>
			<a  className={styles.item} >
					<img src={genreIcons.find(item=>item.id===genre.id)?.icon||genreIcons.find(item=>item.id===0)?.icon||''} className={styles.img}/>
					{genre.title}

			</a>
		</Link>
	)
}

export default GenreItem