import { FC } from 'react'
import { useQuery } from 'react-query'

import { MovieService } from '../../../../services/movie.service'
import SkeletonLoader from '../../../ui/SkeletonLoader'

import MovieList from './MovieList'
import styles from './MovieList.module.scss'

const PopularMovies: FC = () => {
	const {
		isLoading,
		data: popularMovies,
		isSuccess,
	} = useQuery('Popular movies in sidebar', () =>
		MovieService.getMostPopularMovies()
	)
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={1} className="h-8 mb-4" />
			<SkeletonLoader count={3} className="h-24 mb-4" />{' '}
			<SkeletonLoader count={1} className="h-8 mb-4" />
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={popularMovies || []}
			title="Популярные фильмы"
		/>
	)
}

export default PopularMovies
