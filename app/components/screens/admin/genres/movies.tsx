import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useActions } from '@/hooks/useActions'
import { useGenreById } from '@/hooks/useGenre'

const GenreMovies: FC = () => {
	const { movies, isLoading, pagination } = useGenreById()
	const { getGenreById } = useActions()
	const router = useRouter()

	const genreId = router.query.id
	const [page, setPage] = useState(1)

	const totalPages = pagination?.totalPages || 1
	const canLoadMore = page < totalPages

	useEffect(() => {
		if (!router.isReady) return
		if (!genreId || genreId === 'new') return

		getGenreById({
			genreId: String(genreId),
			params: {
				page: page.toString(),
				id_sort: '1',
			},
		})
	}, [router.isReady, genreId, page, getGenreById])

	const loadMore = () => {
		if (canLoadMore) {
			setPage(prev => prev + 1)
		}
	}

	if (isLoading && page === 1) return <div>Загрузка фильмов...</div>

	if (!movies?.length) return <div>Фильмы не найдены</div>

	return (
		<div className="mt-8">
			<h2 className="text-2xl font-bold mb-4">
				Фильмы ({movies.length})
			</h2>

			<div className="flex flex-wrap gap-2">
				{movies.map(movie => (
					<div
						key={movie.id}
						className="flex items-center gap-4 border w-60 rounded p-2"
					>
						<img src={movie.logo} alt={movie.title} width={70} />

						<div className="flex-1">
							<div className="font-semibold">{movie.title}</div>

							{'year' in movie && movie.year && (
								<div className="text-sm text-gray-500">
									{movie.year}
								</div>
							)}
						</div>
					</div>
				))}
			</div>

			{/* LOAD MORE */}
			{movies.length > 0 && (
				<div className="mt-6 flex justify-center">
					<button
						onClick={loadMore}
						disabled={!canLoadMore}
						className={`px-5 py-2 border rounded ${
							canLoadMore
								? 'hover:bg-black hover:text-white'
								: 'opacity-40 cursor-not-allowed'
						}`}
					>
						{canLoadMore ? 'Загрузить ещё' : 'Больше нет'}
					</button>
				</div>
			)}
		</div>
	)
}

export default GenreMovies