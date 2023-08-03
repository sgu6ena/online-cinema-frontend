import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useActions } from '../../../../hooks/useActions'
import { useFavoritesById } from '../../../../hooks/useFavorites'
import { getListDot } from '../../../../utils/movie/getGenresList'
import { useMovie } from '../../../../hooks/useMovie'
import Field from '../../../ui/form-elemets/Field'
import Heading from '../../../ui/heading/Heading'
import GenreList from '@/screens/admin/movies/genreList'
import BannersAdd from '@/screens/admin/movies/bannersAdd'
import PayToggleButton from '@/screens/admin/movies/payToggleButton'
import VisibleToggleButton from '@/screens/admin/movies/visibleToggleButton'



const MovieEdit: FC = () => {
	const {
		movie,
		isLoading,

	} = useMovie()
	const {
		getMovie,
	} = useActions()
	const { query } = useRouter()
	const movieId = query.id && String(query.id)



	useEffect(() => {
		movieId && getMovie(movieId)
	}, [movieId])



	return (
		<div className={'p-layout'}>
			<div className={'flex justify-between gap-4 mb-2'}>
				<div className={'flex flex-col gap-4 mb-1'}>
					<Heading title={'Редактирование фильма'} />
					<Heading title={movie?.title || ''} className={'text-5xl'} />
				</div>

			</div>
			{isLoading?<>...</>:
				<div>


					<div className='flex items-center gap-4'>
						<img className={'h-60 w-44 rounded-image'} src={movie?.logo} alt={movie?.title} />

						<BannersAdd/>

					</div>

					<div className={'w-full'}>

						<Field placeholder={'название'} type={'text'} defaultValue={movie?.title} />
						{/*<Field placeholder={'название'} type={'text'} defaultValue={movie?.title} />*/}
						<Field placeholder={'описание'} type={'textarea'} defaultValue={movie?.review} />
						<div className={'flex w-full gap-4'}>
							<Field placeholder={'год'} type={'text'} defaultValue={movie?.year} />
							<Field placeholder={'сериал?'} type={'text'} defaultValue={movie?.serial ? 'да' : 'нет'} />
							<Field placeholder={'возрастное ограничение'} type={'text'} defaultValue={movie?.rate_age} />
							<Field placeholder={'длительность'} type={'text'} defaultValue={movie?.length} />
							<Field placeholder={'доступ'} type={'text'} defaultValue={movie?.access ? 'платно' : 'бесплатно'} />
						</div>
					</div>
					<GenreList id={movieId as string} activeGenres={[...movie?.genre|| [], ...movie?.genreExt|| []]}/>
				</div>


}
			{/*<div className={'flex gap-2 mt-8 flex-wrap'}>{collections.map((item) => (*/}
			{/*	))}</div>*/}
		</div>
	)
}

export default MovieEdit