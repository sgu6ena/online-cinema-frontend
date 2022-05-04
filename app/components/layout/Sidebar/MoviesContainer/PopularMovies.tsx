import { FC, useEffect } from 'react'
import { useQuery } from 'react-query'

import { MovieService } from '../../../../services/movie.service'
import { PortalService } from '../../../../services/portal.service'
import SkeletonLoader from '../../../ui/SkeletonLoader'

import MovieList from './MovieList'

const PopularMovies: FC = () => {
	const {
		isLoading,
		data: popularMovies,
		isSuccess,
	} = useQuery('Popular movies in sidebar', () => PortalService.getAll())

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
			title="Смотрят сейчас"
		/>
	)
}

export default PopularMovies
