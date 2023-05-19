import { FC } from 'react'

import { IMainGenres } from '@/shared/types/movie.types'

import GenreItem from './GenreItem'

const GenresMain: FC<{ genres: IMainGenres }> = ({
	genres: { items, title },
}) => {
	return (
		<div className={'flex gap-4 m-5  flex-wrap'}>
			{items.map((item) => (
				<GenreItem genre={item} />
			))}
		</div>
	)
}

export default GenresMain
