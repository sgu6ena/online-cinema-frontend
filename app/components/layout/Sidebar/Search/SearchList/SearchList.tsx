import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { IMovie } from '../../../../../shared/types/movie.types'

import { getMovieUrl } from '../../../../../config/url.config'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link href={getMovieUrl(movie.slug)} key={movie._id}>
						<a>
							<Image
								src={movie.poster}
								width={50}
								height={50}
								objectFit="cover"
								objectPosition="top"
								draggable={false}
							/>
						</a>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Фильм не найден!</div>
			)}
		</div>
	)
}

export default SearchList