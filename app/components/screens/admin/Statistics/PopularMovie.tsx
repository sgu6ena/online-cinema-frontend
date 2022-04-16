import { FC } from 'react'
import { useQuery } from 'react-query'
import { MovieService } from '../../../../services/movie.service'
import { IMovie } from '../../../../shared/types/movie.types'
import cn from 'classnames'
import Image from 'next/image'

import styles from '../Admin.module.scss'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import Subheading from '../../../ui/heading/Subheading'

const PopularMovie: FC = () => {
	const {
		isLoading,
		data: movie,
	} = useQuery('Most popular film in admin',
		() => MovieService.getMostPopularMovies(),
		{ select: (data): IMovie => data[0] })

	return (
		<div className={cn(styles.block, styles.popular)}>
			<Subheading title='Самый популярный фильм' />
			{isLoading ? <SkeletonLoader className='h-48' /> : movie && <>
				<h3>Фильм запущен{movie.countOpened} раз</h3>
				<Image src={movie.bigPoster}
							 alt={movie.title}
							 width={283}
							 height={176}
							 className={styles.image}
							 unoptimized />
			</>}
		</div>
	)
}

export default PopularMovie


